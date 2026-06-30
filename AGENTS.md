# AGENTS.md — HTML Presentation Template

Self-contained HTML presentation system. No build tools, no server, no dependencies. Open `presentation.html` in a browser to present; press `P` to open the synced presenter window.

## Repository structure

| File | Purpose | Edit? |
|------|---------|-------|
| `presentation.html` | Main presentation deck — slides live here | Yes |
| `notes.js` | Speaker notes and slide metadata | Yes — always alongside slide changes |
| `presenter.html` | Presenter popup window (synced navigation + notes) | Rarely |
| `AGENTS.md` | This file | No |
| `CLAUDE.md` | Claude-specific instructions | No |

---

## Starting a new presentation

1. Copy this repo to a new folder.
2. In `presentation.html`: update `<title>`, the `.brand` text, and the cover slide content.
3. Replace or add slides — keep the CSS block entirely untouched.
4. Update `notes.js` to match (see **Speaker notes** below).
5. Open `presentation.html`; press `P` to open the presenter window.

---

## Slide anatomy

Every slide is a `<section>` inside `<main class="deck">`:

```html
<section class="slide" data-title="Slide Title" data-duration="2:00">
  <header class="slide-head">
    <div class="brand"><span class="brand-mark"></span> Course or Event</div>
    <div class="section-name">Section label</div>
  </header>
  <div class="slide-body">
    <div class="eyebrow">Eyebrow label</div>
    <h2>Main heading with optional <span class="accent">accent</span></h2>
    <!-- content components here -->
  </div>
</section>
```

**Required attributes on every `<section>`:**
- `data-title` — used in the overview grid, presenter window, and notes drawer. Must match `SPEAKER_SLIDES[i].title`.
- `data-duration` — estimated speaking time, e.g. `"2:00"`. Must match `SPEAKER_SLIDES[i].duration`.

**The first slide** must have `class="slide active"`. All others have `class="slide"` (plus optional modifier classes).

### Slide modifier classes

| Class | Effect |
|-------|--------|
| `section-slide` | Section-break layout: large number + heading side by side. Requires `.section-index` inside `.slide-body`. |

---

## CSS component reference

All styles are inlined in `presentation.html`. **Never add external CSS or JS.**

### Layout grids

```html
<div class="grid-2">…</div>   <!-- 2 equal columns -->
<div class="grid-3">…</div>   <!-- 3 equal columns -->
<div class="grid-4">…</div>   <!-- 4 equal columns -->
<div class="grid-5">…</div>   <!-- 5 equal columns -->
<div class="split">…</div>    <!-- asymmetric 2-col (wider left), vertically centered -->
```

Grids collapse to fewer columns on small screens automatically.

### Cards

```html
<div class="card">
  <span class="card-number">01</span>
  <strong>Card title</strong>
  <p>Supporting description.</p>
</div>
```

`card-number` accepts numbers (`01`) or short keyword labels (`SAST`, `PREVENT`).

### Flow diagrams (horizontal process)

```html
<div class="flow">
  <div class="flow-node">Node A</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-node highlight">Node B</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="flow-node">Node C</div>
</div>
```

Add `class="highlight"` to a `.flow-node` to give it a cyan accent border/background.

### Stack (labeled rows)

```html
<div class="stack">
  <div class="stack-row">
    <strong>Label</strong>
    <span>Description or value for this row.</span>
  </div>
</div>
```

### Comparison columns

```html
<div class="compare">
  <div class="compare-col">
    <h3>Option A</h3>
    <ul class="clean">
      <li>Point one.</li>
      <li>Point two.</li>
    </ul>
  </div>
  <div class="compare-col">
    <h3>Option B</h3>
    <ul class="clean">…</ul>
  </div>
</div>
```

### Metrics (large numbers)

```html
<div class="metric">
  <span>42%</span>
  <p>What this number represents.</p>
</div>
```

### Pills and tags

```html
<!-- Standalone pill -->
<span class="pill"><span class="pill-dot"></span> Label</span>

<!-- Wrapping group of pills -->
<div class="pill-wrap">
  <span class="pill"><span class="pill-dot"></span> Topic A</span>
  <span class="pill"><span class="pill-dot"></span> Topic B</span>
</div>

<!-- Amber tag (used in risk rows) -->
<span class="tag">Category</span>
```

### Quote / large statement

```html
<p class="quote">
  The main claim or statement.<br>
  <span class="muted">A softer qualifying line.</span>
</p>
```

### Risk list

```html
<div class="risk-list">
  <div class="risk">
    <span class="risk-index">01</span>
    <div>
      <strong>Risk name</strong>
      <small>One-line description of impact or context.</small>
    </div>
    <span class="tag">Category</span>
  </div>
</div>
```

### Closing rows (key → value summary)

```html
<div class="closing">
  <div class="closing-row">
    <strong>Category</strong>
    <span>Summary statement for this category.</span>
  </div>
</div>
```

### Pipeline (3-stage with arrows)

```html
<div class="pipeline-map">
  <div class="pipeline-stage">
    <span>Phase label</span>
    <strong>Stage title</strong>
    <p>What happens at this stage.</p>
  </div>
  <div class="flow-arrow">&rarr;</div>
  <div class="pipeline-stage">…</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="pipeline-stage">…</div>
</div>
```

### Frameworks grid

```html
<div class="frameworks">
  <div class="framework">
    <b>Framework name</b>
    <span>What it covers and when to reach for it.</span>
  </div>
</div>
```

`.frameworks` uses a 3-column grid by default.

### Ladder (graduated steps)

```html
<div class="ladder">
  <div class="ladder-step" style="--h: 120px">
    <span>STEP 1</span>
    <strong>Step label</strong>
  </div>
  <div class="ladder-step" style="--h: 180px">…</div>
</div>
```

`--h` controls the minimum height (use increasing values for a staircase effect). `.ladder` defaults to 5 equal columns.

### Section slide layout

```html
<section class="slide section-slide" data-title="Section Name" data-duration="0:15">
  <header class="slide-head">
    <div class="brand"><span class="brand-mark"></span> Block N</div>
    <div class="section-name"></div>
  </header>
  <div class="slide-body">
    <div class="section-index">01</div>
    <div>
      <div class="eyebrow">Section name</div>
      <h2>Section heading</h2>
      <p class="lead">What this section covers.</p>
    </div>
  </div>
</section>
```

### Monolith → services diagram

```html
<div class="mono-visual">
  <div class="monolith">Monolith<br>label</div>
  <div class="flow-arrow">&rarr;</div>
  <div class="services">
    <div class="service">Service A</div>
    <div class="service">Service B</div>
    <div class="service">Service C</div>
  </div>
</div>
```

`.services` is a 3-column sub-grid. Services at positions 2 and 5 get amber styling automatically.

### Mock report window

```html
<div class="mock-window">
  <div class="mock-title"><span></span><span></span><span></span></div>
  <div class="report-line">
    <span class="severity high">Critical</span>
    <strong>Finding title</strong>
    <span>Action</span>
  </div>
  <div class="report-line">
    <span class="severity medium">Medium</span>
    <strong>Finding title</strong>
    <span>Action</span>
  </div>
  <div class="report-line">
    <span class="severity low">Low</span>
    <strong>Finding title</strong>
    <span>Action</span>
  </div>
</div>
```

### Vulnerability flow panels

```html
<div class="vuln-grid">
  <div class="vuln-panel">
    <h3>Vulnerability name</h3>
    <div class="vuln-flow">
      <div class="vuln-node danger">Attacker</div>
      <div class="vuln-arrow">&rarr;</div>
      <div class="vuln-node">Server</div>
      <div class="vuln-arrow">&rarr;</div>
      <div class="vuln-node danger">Database</div>
    </div>
    <div class="vuln-example">
      <small>Example payload</small>
      code snippet here
    </div>
  </div>
</div>
```

---

## Typography helpers

| Class / element | Use |
|----------------|-----|
| `.eyebrow` | Small uppercase label with a leading line, placed above a heading |
| `.lead` | Large muted subtitle, placed below a heading |
| `h1` | Cover title or closing title |
| `h2` | Primary slide heading |
| `h3` | Secondary heading inside components |
| `.accent` | Cyan color — use on `<span>` inside headings |
| `.amber` | Amber color |
| `.coral` | Coral/red color |
| `.violet` | Violet/purple color |
| `.muted` | Muted text color (secondary gray) |

---

## Design tokens

Defined as CSS variables at the top of `<style>` in `presentation.html`. Edit these to retheme the entire presentation.

```css
--bg            /* Dark background */
--bg-soft       /* Slightly lighter background */
--text          /* Primary text color */
--muted         /* Secondary / de-emphasized text */
--cyan          /* Primary accent — borders, highlights, eyebrows */
--amber         /* Secondary accent — warnings, tags */
--coral         /* Danger / error accent */
--violet        /* Tertiary accent */
--line          /* Subtle border color */
--line-bright   /* Stronger border color */
--shadow        /* Box shadow for floating panels */
```

---

## Speaker notes (notes.js)

`notes.js` defines three globals. All three must stay in sync with the slides in `presentation.html`.

### SPEAKER_NOTES

One HTML string per slide, in deck order (index 0 = first slide):

```js
window.SPEAKER_NOTES = [
  `<p>Notes for slide 0.</p>`,
  `<p>Notes for slide 1. Use <strong>bold</strong> for emphasis.</p>
   <blockquote><p>A highlighted reminder or transition cue.</p></blockquote>`,
];
```

Allowed tags: `<p>`, `<strong>`, `<em>`, `<code>`, `<blockquote>`.

### SPEAKER_SLIDES

One metadata object per slide, in deck order:

```js
window.SPEAKER_SLIDES = [
  { title: "Slide 0 title", duration: "0:30" },
  { title: "Slide 1 title", duration: "2:00" },
];
```

`title` must match the slide's `data-title` attribute. `duration` must match `data-duration`.

### SPEAKER_SCRIPT

Array of speaker objects. Each speaker owns a subset of slides:

```js
window.SPEAKER_SCRIPT = [
  {
    name: "Speaker Name",
    duration: "20:00",
    items: [
      { type: "section", title: "Introduction" },   // visual group label
      { type: "slide", index: 0 },                  // slide by 0-based deck index
      { type: "slide", index: 1 },
      { type: "bridge", label: "Handoff", text: "Transition cue to the next speaker." },
    ],
  },
];
```

**Item types:**

| Type | Fields | Purpose |
|------|--------|---------|
| `"slide"` | `index` | Reference a slide by its 0-based deck position |
| `"section"` | `title` | Visual group separator in presenter.html |
| `"bridge"` | `label`, `text` | Highlighted handoff or transition note |

**Constraints:**
- Every slide index `0..N-1` must appear exactly once across all speakers.
- Indices must be in ascending order across speakers (first speaker's last index < second speaker's first index). This keeps presenter.html aligned with the main deck.
- `SPEAKER_NOTES.length === SPEAKER_SLIDES.length === number of <section class="slide"> elements in presentation.html`.

---

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `→` / `Space` / `PageDown` | Next slide |
| `←` / `PageUp` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `N` | Toggle inline notes drawer |
| `P` | Open / focus presenter popup window |
| `O` | Toggle overview grid |
| `F` | Toggle fullscreen |
| `Esc` | Close overview |

The presenter window (P) mirrors these shortcuts and sends navigation commands back to the main deck.

---

## Sync mechanism

Three channels are active simultaneously; the first available one wins:

1. **BroadcastChannel** — works when both windows share the same browser session.
2. **postMessage** — works when `presenter.html` is opened as a popup via the `P` button.
3. **localStorage** — cross-tab fallback, works even without BroadcastChannel.

Both `presentation.html` and `presenter.html` share the constant:
```js
const CHANNEL = "presentation-sync";
```

If you run two presentations simultaneously in the same browser, give each a unique `CHANNEL` value in both files.

---

## Rules for AI agents

- **Never modify the CSS block** in `presentation.html` or `presenter.html` unless explicitly asked to retheme.
- **Always update `notes.js`** in the same edit as any slide change. Never leave the arrays out of sync.
- **Don't add external dependencies** — no CDN links, no npm packages. The system is intentionally self-contained.
- **Preserve `data-title` and `data-duration`** on every slide — they power the overview, progress bar, and notes drawer.
- **Keep the first slide `class="slide active"`** and all others `class="slide"` (plus optional modifier classes after).
- **Match array lengths**: `SPEAKER_NOTES.length === SPEAKER_SLIDES.length === slide count in HTML`.
- **When removing a slide**: renumber all `index` references in `SPEAKER_SCRIPT` — indices shift down for every slide removed before them.
- **When adding a slide**: append to `SPEAKER_NOTES` and `SPEAKER_SLIDES`, and add the new index to the appropriate speaker's `items` in `SPEAKER_SCRIPT`.
- **Prefer existing component classes** over custom inline styles. Check this file's component reference before reaching for `style=""`.
