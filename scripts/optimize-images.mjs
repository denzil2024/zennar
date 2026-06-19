// Optimizes large photos in public/ for the web: resizes to a sane max width and
// recompresses to JPEG. Idempotent (skips already-small images) and non-fatal if
// sharp is unavailable, so it is safe to run on every build.
import {
  readdirSync,
  statSync,
  unlinkSync,
  renameSync,
} from 'node:fs'
import path from 'node:path'

let sharp
try {
  sharp = (await import('sharp')).default
} catch {
  console.warn('[optimize-images] sharp not available, skipping')
  process.exit(0)
}

const TARGET_DIRS = ['public/properties', 'public/blog']
const MAX_WIDTH = 1600
const SIZE_LIMIT = 350 * 1024 // already-small JPEGs are skipped

let savedBytes = 0
for (const dir of TARGET_DIRS) {
  let files
  try {
    files = readdirSync(dir)
  } catch {
    continue // dir does not exist yet
  }
  for (const file of files) {
    if (!/\.(jpe?g|png)$/i.test(file)) continue
    const full = path.join(dir, file)
    const before = statSync(full).size
    const meta = await sharp(full).metadata()
    const alreadyOptimized =
      before <= SIZE_LIMIT &&
      (meta.width || 0) <= MAX_WIDTH &&
      /\.jpe?g$/i.test(file)
    if (alreadyOptimized) continue

    const buf = await sharp(full)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer()

    const outName = file.replace(/\.(png|jpe?g)$/i, '.jpg')
    const outFull = path.join(dir, outName)
    const tmp = outFull + '.tmp'
    await sharp(buf).toFile(tmp)
    if (outFull !== full) unlinkSync(full) // drop the original (e.g. .png)
    renameSync(tmp, outFull)

    const after = statSync(outFull).size
    savedBytes += before - after
    console.log(
      `[optimize-images] ${file} -> ${outName}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`,
    )
  }
}
if (savedBytes > 0) {
  console.log(
    `[optimize-images] saved ${(savedBytes / 1024 / 1024).toFixed(2)} MB`,
  )
}
