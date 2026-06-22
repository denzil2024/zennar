-- ZENNARA Client Portal schema. Safe to run repeatedly (IF NOT EXISTS).

-- Portal users (the property/facility management clients).
CREATE TABLE IF NOT EXISTS clients (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  phone       TEXT UNIQUE NOT NULL,          -- E.164 digits, e.g. 2547XXXXXXXX
  email       TEXT,
  status      TEXT NOT NULL DEFAULT 'active', -- active | invited | suspended
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ZENNARA staff who can manage clients (admin screen, step 5).
CREATE TABLE IF NOT EXISTS admins (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  phone       TEXT UNIQUE NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- One-time WhatsApp login codes (OTP). Code is stored hashed, never plain.
CREATE TABLE IF NOT EXISTS login_codes (
  id          SERIAL PRIMARY KEY,
  phone       TEXT NOT NULL,
  code_hash   TEXT NOT NULL,
  expires_at  TIMESTAMPTZ NOT NULL,
  consumed    BOOLEAN NOT NULL DEFAULT false,
  attempts    INT NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_login_codes_phone ON login_codes (phone);

-- Server-side sessions (token lives in an httpOnly cookie).
CREATE TABLE IF NOT EXISTS sessions (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id   INT REFERENCES clients (id) ON DELETE CASCADE,
  admin_id    INT REFERENCES admins (id) ON DELETE CASCADE,
  expires_at  TIMESTAMPTZ NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Properties under management, per client.
CREATE TABLE IF NOT EXISTS properties (
  id          SERIAL PRIMARY KEY,
  client_id   INT NOT NULL REFERENCES clients (id) ON DELETE CASCADE,
  name        TEXT NOT NULL,
  area        TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Payments / invoices.
CREATE TABLE IF NOT EXISTS payments (
  id          SERIAL PRIMARY KEY,
  client_id   INT NOT NULL REFERENCES clients (id) ON DELETE CASCADE,
  amount_kes  NUMERIC(12,2) NOT NULL,
  due_date    DATE,
  status      TEXT NOT NULL DEFAULT 'due',   -- due | paid | overdue
  description TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Maintenance requests / tickets.
CREATE TABLE IF NOT EXISTS maintenance_requests (
  id          SERIAL PRIMARY KEY,
  client_id   INT NOT NULL REFERENCES clients (id) ON DELETE CASCADE,
  property_id INT REFERENCES properties (id) ON DELETE SET NULL,
  description TEXT NOT NULL,
  status      TEXT NOT NULL DEFAULT 'open',  -- open | in_progress | urgent | done
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Documents shared with the client.
CREATE TABLE IF NOT EXISTS documents (
  id          SERIAL PRIMARY KEY,
  client_id   INT NOT NULL REFERENCES clients (id) ON DELETE CASCADE,
  title       TEXT NOT NULL,
  url         TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Eco / green performance reports.
CREATE TABLE IF NOT EXISTS eco_reports (
  id                 SERIAL PRIMARY KEY,
  client_id          INT NOT NULL REFERENCES clients (id) ON DELETE CASCADE,
  period             TEXT,                   -- e.g. '2026-05'
  energy_saved_pct   NUMERIC(5,2),
  waste_diverted_pct NUMERIC(5,2),
  score              TEXT,                   -- e.g. 'A+'
  created_at         TIMESTAMPTZ NOT NULL DEFAULT now()
);
