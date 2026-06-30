# CLAUDE.md

See [AGENTS.md](AGENTS.md) for the full guide: file structure, slide anatomy, every CSS component, notes.js format, keyboard shortcuts, and sync mechanism.

## Quick reference

| Task | Where |
|------|-------|
| Add / edit slides | `presentation.html` → inside `<main class="deck">` |
| Add / edit notes | `notes.js` → `SPEAKER_NOTES`, `SPEAKER_SLIDES`, `SPEAKER_SCRIPT` |
| Change the theme | CSS variables at the top of `<style>` in `presentation.html` |
| Change sync channel | `const CHANNEL` at the top of the `<script>` block in both `presentation.html` and `presenter.html` |

## Working rules

- Edit `notes.js` in the same response as any slide change — never leave the arrays out of sync.
- When adding a slide, append to all three arrays in `notes.js` and add the new index to `SPEAKER_SCRIPT`.
- When removing a slide, renumber all `index` references in `SPEAKER_SCRIPT` (they shift for every slide removed before them).
- Reuse existing component classes from AGENTS.md before reaching for inline styles.
- Ask before rethemeing — it requires touching every CSS variable.
- Don't add external resources. This is intentionally zero-dependency.
