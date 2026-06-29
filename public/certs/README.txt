ZENNARA — Certification & accreditation logos
=============================================

Drop the official logo for each accrediting body into this folder using the
EXACT filenames below. The About page (Accreditations & Memberships section)
loads them automatically. Any file that is missing falls back to the
placeholder badge icon, so you can add them one at a time.

Expected files (referenced in src/data/content.ts -> CERTIFICATIONS):

  earb.png    Estate Agents Registration Board (EARB)
  vrb.png     Valuers Registration Board (VRB)
  isk.png     Institution of Surveyors of Kenya (ISK)
  ifma.png    BIFM / IFMA Certified Facility Managers
  icpak.png   ICPAK (issuer of the CPA-K qualification)

  Sectional Properties Act (2020) is a statute, not a body, so it keeps the
  badge icon and has no logo.

Format & sizing
  - PNG with a transparent background (SVG also works), roughly square.
  - About 200 x 200 px renders crisply in the 56px circular slot.
  - If you only have an SVG, keep the same name (e.g. earb.svg) and update
    that one path in src/data/content.ts.
  - If a coloured logo looks weak on the green-tinted circle, tell the
    developer and the slot background can be switched to white for logos.

IMPORTANT — before publishing
  - These are trademarked marks of third-party bodies. Only display a logo if
    ZENNARA genuinely holds that accreditation/membership, and follow each
    body's brand-usage rules. When in doubt, leave it as the text badge
    rather than the logo.
