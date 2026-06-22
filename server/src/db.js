import pg from 'pg'

const { Pool } = pg

const connectionString = process.env.DATABASE_URL
const isLocal =
  !connectionString ||
  connectionString.includes('localhost') ||
  connectionString.includes('127.0.0.1')

export const pool = new Pool({
  connectionString,
  // Railway/hosted Postgres requires SSL; local does not.
  ssl: isLocal ? false : { rejectUnauthorized: false },
})

export const query = (text, params) => pool.query(text, params)
