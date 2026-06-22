// Calls ZENNARA's WhatsApp service /send. Returns { sent: false } when the
// service isn't configured yet (so the caller can fall back for testing).
export async function sendWhatsApp(to, message) {
  const url = process.env.WHATSAPP_SEND_URL
  const token = process.env.WHATSAPP_SEND_TOKEN
  if (!url || !token) return { sent: false, reason: 'not_configured' }
  try {
    const res = await fetch(`${url.replace(/\/$/, '')}/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ to, message }),
    })
    if (!res.ok) return { sent: false, reason: `status_${res.status}` }
    return { sent: true }
  } catch (err) {
    return { sent: false, reason: err.message }
  }
}
