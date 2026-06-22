import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { pool } from './db.js'

const dir = path.dirname(fileURLToPath(import.meta.url))
const sql = readFileSync(path.join(dir, 'schema.sql'), 'utf8')

try {
  await pool.query(sql)
  console.log('[migrate] schema applied')
} catch (err) {
  console.error('[migrate] failed:', err.message)
  process.exitCode = 1
} finally {
  await pool.end()
}
