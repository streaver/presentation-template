# HTML Presentation Template

Zero-dependency presentation system. One HTML file to present, one popup window for speaker notes, no build step, no server required.

## Usage

1. **Open** `presentation.html` in a browser.
2. **Navigate** with arrow keys, `Space`, or the on-screen buttons.
3. **Press `P`** to open the synced presenter/notes window in a popup.
4. Press `F` to go fullscreen, `O` for the slide overview grid, `N` for the inline notes drawer.

### Keyboard shortcuts

| Key | Action |
|-----|--------|
| `→` / `Space` / `PageDown` | Next slide |
| `←` / `PageUp` | Previous slide |
| `Home` / `End` | First / last slide |
| `N` | Toggle inline notes drawer |
| `P` | Open presenter window (synced) |
| `O` | Toggle overview grid |
| `F` | Toggle fullscreen |
| `Esc` | Close overview |

### Presenter window

Press `P` (or click the P button) from `presentation.html`. A popup opens with:
- Live slide indicator (current / previous / next)
- Speaker script and notes for the current slide
- Navigation arrows that sync back to the main window

Navigation in either window advances both. Works via BroadcastChannel + localStorage — no server needed.

## Creating a new presentation

1. **Copy this folder** to a new location (or use it as a GitHub template repo).
2. **Edit `presentation.html`**:
   - Update `<title>`, the `.brand` text (top-left of each slide), and the cover slide.
   - Replace the template slides with your content. The CSS block must stay untouched.
3. **Edit `notes.js`** to match your slides (one entry per slide in `SPEAKER_NOTES` and `SPEAKER_SLIDES`).
4. Open and present.

> If you work with Claude, see `AGENTS.md` for the full component library, notes format, and agent rules.

## File structure

```
presentation.html   Main deck — edit slides here
notes.js            Speaker notes and metadata — edit alongside slides
presenter.html      Presenter popup — rarely needs editing
AGENTS.md           AI agent instructions and CSS component reference
CLAUDE.md           Claude-specific quick reference
README.md           This file
```

## Multi-speaker presentations

Split slides across multiple objects in `SPEAKER_SCRIPT` inside `notes.js`. The presenter window shows a speaker dropdown and scrolls to the active slide automatically. See `AGENTS.md → Speaker notes` for the full format.
