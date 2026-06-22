// ZENNARA WhatsApp service (Baileys).
// Connects ZENNARA's WhatsApp number and exposes a token-protected /send
// endpoint that the portal API calls to deliver login codes and notifications.
import makeWASocket, {
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
} from '@whiskeysockets/baileys'
import express from 'express'
import pino from 'pino'
import QRCode from 'qrcode'

const PORT = process.env.PORT || 3000
const SEND_TOKEN = process.env.SEND_TOKEN // shared secret the API must present
// Store the WhatsApp session on a persistent volume so we don't re-scan on every deploy.
const AUTH_DIR = process.env.AUTH_DIR || 'auth_info'

const logger = pino({ level: 'silent' })
let sock = null
let latestQR = null
let connected = false

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState(AUTH_DIR)
  const { version } = await fetchLatestBaileysVersion()

  sock = makeWASocket({ version, auth: state, logger, syncFullHistory: false })

  sock.ev.on('connection.update', ({ connection, lastDisconnect, qr }) => {
    if (qr) {
      latestQR = qr
      console.log('[wa] QR ready — open /qr to scan')
    }
    if (connection === 'open') {
      connected = true
      latestQR = null
      console.log('[wa] connected')
    }
    if (connection === 'close') {
      connected = false
      const loggedOut =
        lastDisconnect?.error?.output?.statusCode === DisconnectReason.loggedOut
      console.log('[wa] connection closed; reconnect:', !loggedOut)
      if (!loggedOut) connectToWhatsApp()
    }
  })

  sock.ev.on('creds.update', saveCreds)
}

const app = express()
app.use(express.json())

app.get('/health', (_req, res) => res.json({ ok: true, connected }))

// QR page to link ZENNARA's WhatsApp number (visit once during setup).
app.get('/qr', async (_req, res) => {
  if (connected) {
    return res.send('<body style="font:16px sans-serif;text-align:center;padding:40px">✅ WhatsApp connected. No QR needed.</body>')
  }
  if (!latestQR) {
    return res.send('<body style="font:16px sans-serif;text-align:center;padding:40px">Starting up… refresh in a few seconds.</body>')
  }
  const img = await QRCode.toDataURL(latestQR)
  res.send(`<body style="text-align:center;padding:40px;font:16px sans-serif"><h2>Scan with ZENNARA's WhatsApp</h2><img src="${img}" width="300"/><p>Refresh if it expires.</p></body>`)
})

// Outbound send — called by the portal API. Protected by a shared token.
app.post('/send', async (req, res) => {
  if (!SEND_TOKEN) {
    return res.status(500).json({ error: 'SEND_TOKEN not configured' })
  }
  const auth = req.headers.authorization || ''
  if (auth !== `Bearer ${SEND_TOKEN}`) {
    return res.status(401).json({ error: 'unauthorized' })
  }
  if (!connected || !sock) {
    return res.status(503).json({ error: 'whatsapp not connected' })
  }
  const { to, message } = req.body || {}
  if (!to || !message) {
    return res.status(400).json({ error: 'to and message required' })
  }
  try {
    const jid = String(to).replace(/\D/g, '') + '@s.whatsapp.net'
    await sock.sendMessage(jid, { text: String(message) })
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(PORT, () => console.log(`[wa] http on :${PORT}`))
connectToWhatsApp().catch((err) => console.error('[wa] connect error:', err.message))
