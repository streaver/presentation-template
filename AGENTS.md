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
| `.accent` | Blue gradient fill — use on `<span>` inside headings only (brandbook rule: heading accents are always gradient, never flat) |
| `.accent-orange` | Orange gradient fill — use on `<span>` inside headings |
| `.accent-agentic` | Violet→pink gradient — reserved for Agentic AI content only |
| `.highlight` | Solid blue marker block behind inline text (`<span class="highlight">words</span>`) |
| `.highlight-orange` | Solid orange marker block |
| `.blue` | Flat blue — eyebrows and labels only, never headings |
| `.amber` | Flat orange — eyebrows and labels only |
| `.coral` | Danger red |
| `.violet` | Agentic violet — reserved for Agentic AI content |
| `.muted` | Muted text color |

**Hard rule from brandbook:** heading text is either plain white, or uses a gradient/highlight treatment on one accented phrase. Never set a heading (or part of one) to a flat accent color — use `.accent` (gradient) or `.highlight` instead. Eyebrows and labels may stay flat blue.

**Numbers on dark slides:** stat values must be white (`color: var(--text)`), never tinted blue or orange.

---

## Background variants

Add one of these classes to a `<section class="slide …">` to change its background:

| Class | Background |
|-------|-----------|
| _(none)_ | Flat `#282828` (default) |
| `.bg-grid` | Blueprint grid on dark (straight) |
| `.bg-grid-tilted` | Blueprint grid on dark (tilted) |
| `.bg-radial` | Blue radial wash — good for covers |
| `.bg-diagonal` | Blue diagonal gradient — good for closings |
| `.bg-logo-pattern` | Tiled Streaver isotype pattern |
| `.bg-deep` | Deeper dark `#181818` |
| `.bg-blue` | Solid brand blue — strong CTA slides |

Background asset files live in `assets/backgrounds/`.

**Rule:** never place text over gradient backgrounds (`.bg-radial`, `.bg-diagonal`). The shifting luminosity makes all text — headings included — unreliable to read. Gradient backgrounds are decorative only: use them on image-only or logo-only slides (e.g. a full-bleed visual with no copy). For any slide with readable content use `.bg-grid`, `.bg-grid-tilted`, the default flat dark, or `.bg-blue` (solid, fully readable).

---

## Logo placement

All logo files live in `assets/logos/`. Choose the right file based on surface and context:

### Which logo to use

| Surface | Asset | When |
|---------|-------|------|
| Dark slide (default) | `streaver-logo-horizontal-white.png` | Wide space — slide footer, closing slide |
| Dark slide (tight) | `streaver-isotype-white.png` | Slide header `.brand-mark`, avatar-sized |
| Light/white slide | `streaver-logo-horizontal-color.png` | Same as above, on white/light background |
| Light (tight) | `streaver-isotype-blue.png` | Header on light slides |
| Circle avatar / favicon | `streaver-isotype-circle-white-on-dark.png` | Round avatar context, dark bg |
| Circle avatar / favicon | `streaver-isotype-circle-blue-on-white.png` | Round avatar context, light bg |
| Wordmark only | `streaver-wordmark-white.png` / `streaver-wordmark-dark.png` | When the beaver is already present |

**Rules (from brandbook):**
- Never place a gradient fill on any part of the logo — gradient treatment is for type only.
- Minimum clear space around the logo = width of the beaver mark on all sides.
- Do not stretch, recolor, or apply effects (drop shadow, outline) to the logo.
- The isotype always shows the beaver facing right and looking upward — do not flip or rotate.

### Placement patterns in slides

**Slide header (every slide):** the `.brand-mark` span already loads `streaver-isotype-white.png` as a CSS background image. No changes needed.

**Background watermark (cover / closing):** large isotype at low opacity in the top-right corner — creates depth without competing with content:

```html
<section class="slide active bg-radial" …>
  <img src="assets/logos/streaver-isotype-white.png" alt=""
       style="position:absolute;right:-80px;top:-80px;width:380px;opacity:0.08;pointer-events:none;z-index:0;">
  <!-- slide content above z-index:0 -->
</section>
```

**Closing slide (solid blue `.bg-blue`):** horizontal white logo shown prominently — place it at the top or bottom of the slide body:

```html
<img src="assets/logos/streaver-logo-horizontal-white.png" alt="Streaver"
     style="height:48px;display:block;margin-bottom:32px;">
```

---

## Icons

Icons use the CSS mask technique so they can be recolored to any brand color. Set `--icon-src` to the SVG path, then add a color modifier:

```html
<span class="icon icon-blue" style="--icon-src: url('assets/icons/streaver-icon-01-general-rocket.svg')"></span>
```

**Color modifiers:** `icon-blue` (brand blue), `icon-orange` (brand orange), `icon-muted` (muted). No modifier = white.

**Size modifiers:** `icon-sm` (24 px), `icon-md` (32 px), `icon-lg` (48 px), `icon-xl` (64 px). No modifier = 40 px.

**Color-by-surface rule (from brandbook):**
- On dark backgrounds → white (`no modifier`)
- On light backgrounds → blue (`icon-blue`)
- As a high-energy accent → orange (`icon-orange`)
- On a solid blue tile → white (`no modifier`)

**Full icon library** (213 icons, `assets/icons/`). Naming convention: `streaver-icon-{nn}-{category}-{name}.svg`

**Available icons** (in `assets/icons/`):

**General** (`streaver-icon-01-general-*.svg`)

`add-circle` · `alert` · `arrow-diag-down-left` · `arrow-diag-down-right` · `arrow-diag-up-left` · `arrow-diag-up-right` · `arrow-down-circle` · `arrow-down-up` · `arrow-exchange` · `arrow-first-page` · `arrow-fullscreen-left` · `arrow-fullscreen-right` · `arrow-last-page` · `arrow-left-circle` · `arrow-maximize` · `arrow-move` · `arrow-right-circle` · `arrow-up-circle` · `badge` · `battery-charge` · `battery-full` · `battery-half` · `battery-low` · `bookmark` · `bug` · `bulb` · `cart-minus` · `cart-plus` · `checklist-circle` · `chevron-left` · `chevron-right` · `clock` · `cogwheel` · `cogwheel-services` · `cogwheel-time-management` · `conversation` · `development` · `eye` · `eye-off` · `flag` · `flash` · `gear` · `graphic-design` · `graphs-chart` · `hand-solution` · `heart` · `image` · `incoming-call` · `master-key` · `megaphone` · `pin-map` · `process` · `refresh-redo` · `refresh-undo` · `rocket` · `search` · `settings` · `speed` · `star` · `step` · `sync-reload` · `target` · `tools` · `traffic-cone` · `transfer` · `umbrella` · `verification-badge` · `video-player` · `video-player-alt` · `volume-down` · `volume-mute` · `volume-up` · `warning` · `wifi-signal` · `zoom-in` · `zoom-out`

**Technology** (`streaver-icon-04-tech-*.svg`)

`camera` · `camera-back` · `desktop` · `laptop` · `memory-card` · `printer` · `processor` · `router` · `satellite` · `satellite-alt` · `smartphone` · `smartwatch` · `usb-drive` · `video-camera` · `vr-headset`

**Artificial intelligence** (`streaver-icon-06-ai-*.svg`)

`bionic-hand` · `brain` · `chip` · `face-id` · `robot`

**Data security** (`streaver-icon-07-data-security-*.svg`)

`atomic-energy` · `barrier` · `cloud-network` · `face-scan` · `folders` · `globe` · `hosting` · `id-card` · `lock` · `lock-open` · `message-chat` · `network` · `network-alt` · `networking` · `shield-check` · `workflow`

**Teamwork** (`streaver-icon-08-teamwork-*.svg`)

`laptop` · `meeting-2` · `meeting-4` · `meeting-5` · `meeting-8` · `meeting-9` · `meeting-13` · `meeting-14` · `people-01` · `people-10` · `substitute` · `team`

**Hands** (`streaver-icon-09-hands-*.svg`)

`cooperation` · `faces-happy-sad-normal` · `fire-heart` · `high-five` · `partner` · `security-share-folder` · `teamwork`

**Message** (`streaver-icon-10-message-*.svg`)

`email` · `email-open` · `faq` · `mailbox`

**Design** (`streaver-icon-11-design-*.svg`)

`color-palette` · `drawing-tablet` · `easel` · `geometry` · `graphic-tablet` · `ink` · `paint-brush` · `paint-bucket` · `photo-album` · `pictures-ai` · `vector-pen` · `watercolor`

**Pets** (`streaver-icon-12-pets-*.svg`)

`cat` · `dog` · `paw` · `paw-alt` · `pet-adoption`

**Sports** (`streaver-icon-13-sports-*.svg`)

`achievement` · `podium` · `scoreboard` · `teams-tshirts` · `trophy`

---

## Design tokens

Defined as CSS variables at the top of `<style>` in `presentation.html`. Edit these to retheme the entire presentation.

```css
--dark              /* #282828 — primary dark surface */
--dark-deep         /* #181818 — deeper dark */
--blue              /* #2f6cdb — brand blue */
--blue-primary      /* #3d5ae0 — primary blue accent */
--orange            /* #fd7f23 — brand orange */
--bg                /* alias for --dark */
--line              /* White at 14% opacity — subtle border on dark */
--line-bright       /* White at 28% opacity — stronger border */
--text              /* #f4f4f4 — primary text */
--muted             /* White at 62% — secondary text */
--faint             /* White at 38% — de-emphasized text */
--shadow            /* Neutral shadow, no color glow */
--radius            /* 16px — card radius (--radius-lg) */
--gradient-text-blue    /* Linear gradient for blue heading accents */
--gradient-text-orange  /* Linear gradient for orange heading accents */
--highlight-blue        /* Solid blue marker block color */
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
