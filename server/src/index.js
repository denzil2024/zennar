import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { pool } from './db.js'
import authRoutes from './routes/auth.js'
import adminRoutes from './routes/admin.js'

const dir = path.dirname(fileURLToPath(import.meta.url))

const app = express()

app.use(helmet())
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: process.env.CORS_ORIGIN
      ? process.env.CORS_ORIGIN.split(',').map((s) => s.trim())
      : true,
    credentials: true,
  }),
)

// Liveness check (no DB).
app.get('/health', (_req, res) => res.json({ ok: true }))

// Readiness check (verifies DB connectivity).
app.get('/health/db', async (_req, res) => {
  try {
    const r = await pool.query('SELECT now() AS now')
    res.json({ ok: true, time: r.rows[0].now })
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message })
  }
})

app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)

const port = process.env.PORT || 8080

async function start() {
  // Create tables on boot (schema uses IF NOT EXISTS, so this is safe to repeat).
  if (process.env.DATABASE_URL) {
    try {
      await pool.query(readFileSync(path.join(dir, 'schema.sql'), 'utf8'))
      console.log('[api] schema ready')
    } catch (err) {
      console.error('[api] schema error:', err.message)
    }
  } else {
    console.warn('[api] no DATABASE_URL set; skipping schema')
  }
  app.listen(port, () => console.log(`[api] listening on :${port}`))
}

start()
