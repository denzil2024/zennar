// Thin client for the ZENNARA portal API. In dev it talks to the local API on
// :8080; in production set VITE_API_BASE to https://api.zennarafp.com at build time.
const API_BASE =
  (import.meta.env.VITE_API_BASE as string | undefined)?.replace(/\/$/, '') ||
  'http://localhost:8080'

const TOKEN_KEY = 'zennara_portal_token'

export const getToken = (): string | null =>
  typeof localStorage !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : null
export const setToken = (t: string) => localStorage.setItem(TOKEN_KEY, t)
export const clearToken = () => localStorage.removeItem(TOKEN_KEY)

type ApiOpts = { method?: string; body?: unknown; auth?: boolean }

async function api<T>(path: string, opts: ApiOpts = {}): Promise<T> {
  const { method = 'GET', body, auth = false } = opts
  const headers: Record<string, string> = {}
  if (body !== undefined) headers['Content-Type'] = 'application/json'
  if (auth) {
    const t = getToken()
    if (t) headers.Authorization = `Bearer ${t}`
  }
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error((data as { error?: string }).error || `request failed (${res.status})`)
  return data as T
}

export type Dashboard = {
  client: { id: number; name: string; phone: string }
  summary: {
    properties: number
    outstanding_kes: number
    open_maintenance: number
    eco_score: string | null
  }
  properties: { id: number; name: string; area: string | null }[]
  payments: {
    id: number
    amount_kes: string
    due_date: string | null
    status: string
    description: string | null
  }[]
  maintenance: {
    id: number
    description: string
    status: string
    updated_at: string
  }[]
  documents: { id: number; title: string; url: string; created_at: string }[]
  eco: {
    period: string | null
    energy_saved_pct: string | null
    waste_diverted_pct: string | null
    score: string | null
  } | null
}

export const requestCode = (phone: string) =>
  api<{ ok: boolean; devCode?: string }>('/api/auth/request-code', {
    method: 'POST',
    body: { phone },
  })

export const verifyCode = (phone: string, code: string) =>
  api<{ token: string; client: { id: number; name: string; phone: string } }>(
    '/api/auth/verify-code',
    { method: 'POST', body: { phone, code } },
  )

export const fetchDashboard = () => api<Dashboard>('/api/portal/dashboard', { auth: true })

export async function logout() {
  try {
    await api('/api/auth/logout', { method: 'POST', auth: true })
  } catch {
    // best effort; clear local token regardless
  }
  clearToken()
}

// --- Admin (token-gated; separate from the client session) ---
const ADMIN_KEY = 'zennara_admin_token'
export const getAdminToken = (): string | null =>
  typeof localStorage !== 'undefined' ? localStorage.getItem(ADMIN_KEY) : null
export const setAdminToken = (t: string) => localStorage.setItem(ADMIN_KEY, t)
export const clearAdminToken = () => localStorage.removeItem(ADMIN_KEY)

export type AdminClient = {
  id: number
  name: string
  phone: string
  status: string
  created_at?: string
}

async function adminApi<T>(path: string, body?: unknown): Promise<T> {
  const token = getAdminToken()
  const headers: Record<string, string> = {}
  if (body !== undefined) headers['Content-Type'] = 'application/json'
  if (token) headers.Authorization = `Bearer ${token}`
  const res = await fetch(`${API_BASE}${path}`, {
    method: body !== undefined ? 'POST' : 'GET',
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok)
    throw new Error((data as { error?: string }).error || `request failed (${res.status})`)
  return data as T
}

export const adminListClients = () =>
  adminApi<{ clients: AdminClient[] }>('/api/admin/clients')
export const adminCreateClient = (name: string, phone: string) =>
  adminApi<{ client: AdminClient }>('/api/admin/clients', { name, phone })
export const adminAddProperty = (b: {
  clientId: number
  name: string
  area?: string
}) => adminApi('/api/admin/properties', b)
export const adminAddPayment = (b: {
  clientId: number
  amountKes: number
  dueDate?: string | null
  status?: string
  description?: string
}) => adminApi('/api/admin/payments', b)
export const adminAddMaintenance = (b: {
  clientId: number
  description: string
  status?: string
}) => adminApi('/api/admin/maintenance', b)
export const adminAddDocument = (b: {
  clientId: number
  title: string
  url: string
}) => adminApi('/api/admin/documents', b)
export const adminAddEco = (b: {
  clientId: number
  period?: string
  energySavedPct?: number
  wasteDivertedPct?: number
  score?: string
}) => adminApi('/api/admin/eco', b)
