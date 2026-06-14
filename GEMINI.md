# Akkuratistki Project Instructions

## Design System
- **Creative North Star:** "The Art of Visible Care".
- **Aesthetic:** Premium, emotion-driven, high-density industrial minimalist.
- **Typography:** Playfair Display for headings, Onest for body text.
- **Color Palette:** Primary brand dark (#303440), light (#AEB9DA).

## Multi-Language Support
- The website supports EN, PL, and RU.
- Translations are managed in `scripts.js` within the `TRANSLATIONS` constant.
- Use `data-i18n` attributes in HTML for text and `data-i18n-placeholder` for placeholders.
- The `setLanguage(lang)` function is globally exposed on `window`.

## Agentation Integration (Visual Feedback)
- Automated feedback via toolbar/bookmarklet is active.
- Feedback persists to a local SQLite database at `~/.agentation/store.db`.
- The Agentation MCP server runs on `http://localhost:4747`.
- **Note:** The server expects payloads that contain or wrap annotations.
