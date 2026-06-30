// notes.js — Speaker notes for the Beavers presentation.
// Edit this file in parallel with any slide changes in presentation.html.
//
// SPEAKER_NOTES[i]  HTML string shown in the notes drawer for slide i (0-based).
// SPEAKER_SLIDES[i] Metadata { title, duration } for slide i. Must match the HTML deck in order.
// SPEAKER_SCRIPT    Array of speaker objects; each owns a slice of the slides.

window.SPEAKER_NOTES = [
  // Slide 0 — Cover
  `<p>Open with a provocative question: ask the audience to name another species besides humans that reshapes entire river systems. Let the silence land, then introduce the beaver.</p>
   <blockquote><p>Set the frame: this is not a talk about cute animals — it's about one of the most powerful ecological engineers on the planet.</p></blockquote>`,

  // Slide 1 — Section break: Biology
  `<p>Transition into biology. The key message is that every physical trait beavers possess has a direct engineering function — nothing is decorative.</p>`,

  // Slide 2 — Anatomy
  `<p>Walk through each card. The self-sharpening teeth tend to surprise audiences — the orange colour comes from iron compounds in the enamel. Pause on the nictitating eyelid: it's the same adaptation found in sharks and birds of prey.</p>
   <blockquote><p>Transition: "Now that we know what the hardware looks like, let's look at the numbers behind the machine."</p></blockquote>`,

  // Slide 3 — By the Numbers
  `<p>Lead with the 850 m dam in Alberta — it's visible from satellite imagery and is a great hook. The 30-minute dive stat consistently draws audible reactions.</p>
   <p>Emphasise that at 27 kg, a beaver is heavier than most domestic cats and many small dogs — it reframes the mental image people carry.</p>`,

  // Slide 4 — Section break: Behavior
  `<p>Transition into behavior. Stress the "born knowing" angle — beavers raised in captivity with no adult role models still build dams when released. This is pure instinct encoded over millions of years.</p>`,

  // Slide 5 — How a Beaver Builds a Dam
  `<p>Walk through the three phases in order. Phase 03 is worth dwelling on: beavers are so attuned to water sound that researchers have played recordings of running water and triggered immediate building behavior — even on dry land.</p>
   <blockquote><p>Transition: "The dam is only half the story. The family that builds it is just as remarkable."</p></blockquote>`,

  // Slide 6 — Colony Structure
  `<p>The yearling role is often overlooked — they function as a built-in apprenticeship cohort. By the time young beavers leave to find their own territory (usually at age 2), they've had two full construction seasons of on-the-job training.</p>
   <p>The 5 km territory point is useful for scale: that's roughly the length of Manhattan's Central Park.</p>`,

  // Slide 7 — Section break: Ecosystem Impact
  `<p>This is the pivot of the whole presentation. Shift tone here — we're moving from natural history into ecological consequences. The audience should feel the scale of what one family can do.</p>`,

  // Slide 8 — Keystone Engineers
  `<p>Let the quote breathe. Read it aloud slowly. Then hold the pause before advancing to the pills.</p>
   <p>The four pill topics each map to a distinct scientific literature — briefly name a real study or programme for each one if time allows (e.g. the Scottish Beaver Trial for species benefit, Californian work on wildfire resilience).</p>`,

  // Slide 9 — With vs Without Beavers
  `<p>Take the left column first, then mirror each point with the right. The 4–8°C cooling figure is particularly relevant for audiences in drought-prone regions — cold water is where salmon spawn.</p>
   <blockquote><p>Transition: "So if beavers do all this, why aren't they everywhere? Let's look at what's working against them."</p></blockquote>`,

  // Slide 10 — Threats
  `<p>Risk 01 (fur trade legacy) sets historical context — the near-extinction is recent enough that many river systems have never recovered their hydrology. Risks 02 and 03 are current and actionable, which makes them the ones to dwell on.</p>
   <p>Risk 04 is the dark irony: the animals best equipped to buffer against drought are being eliminated by drought.</p>`,

  // Slide 11 — Section break: Conservation
  `<p>Shift to optimism here. Reintroduction programmes have an unusually strong evidence base compared to most conservation interventions. The UK's River Otter Beaver Trial is the gold standard — it had legal protection and rigorous monitoring from day one.</p>`,

  // Slide 12 — Conservation Approaches
  `<p>The Beaver Deceiver (flow device) is worth a quick verbal description: it's a pipe threaded through the dam so the beaver can't hear the water flowing — they stop patching because the "leak sound" is gone. Simple, cheap, effective.</p>
   <blockquote><p>Transition: "These three approaches work at different scales and timelines. Here's how recovery actually unfolds on the ground."</p></blockquote>`,

  // Slide 13 — Recovery Stages
  `<p>Use the ladder visually — point out that each step up represents a measurable biological milestone, not an administrative one. Stage 05 (keystone status) typically takes 10–20 years from first reintroduction, but the ecological returns compound throughout.</p>
   <p>End by noting that several river systems in Scotland and the Netherlands are already at Stage 04.</p>`,

  // Slide 14 — Closing
  `<p>Land the closing message firmly: this is not a niche conservation story. It's a scalable, low-cost solution to some of the most expensive ecological problems governments face — water storage, wildfire mitigation, biodiversity loss.</p>
   <p>Thank the audience and open for questions. Be ready for the "what about flooding farmland?" objection — that's where the coexistence tools from Slide 12 come back in.</p>`,
];

window.SPEAKER_SLIDES = [
  { title: "The Animal That Reshapes Rivers", duration: "0:45" },
  { title: "Biology",                          duration: "0:15" },
  { title: "Anatomy",                          duration: "2:00" },
  { title: "By the Numbers",                   duration: "1:30" },
  { title: "Behavior",                         duration: "0:15" },
  { title: "How a Beaver Builds a Dam",        duration: "3:00" },
  { title: "Colony Structure",                 duration: "2:00" },
  { title: "Ecosystem Impact",                 duration: "0:15" },
  { title: "Keystone Engineers",               duration: "1:30" },
  { title: "With vs Without Beavers",          duration: "2:30" },
  { title: "Threats to Beaver Populations",    duration: "2:00" },
  { title: "Conservation",                     duration: "0:15" },
  { title: "Conservation Approaches",          duration: "2:30" },
  { title: "Recovery Stages",                  duration: "2:00" },
  { title: "Beavers Are the Solution",         duration: "1:00" },
];

window.SPEAKER_SCRIPT = [
  {
    name: "Speaker",
    duration: "19:45",
    items: [
      { type: "section", title: "Introduction" },
      { type: "slide", index: 0 },

      { type: "section", title: "Biology" },
      { type: "slide", index: 1 },
      { type: "slide", index: 2 },
      { type: "slide", index: 3 },

      { type: "section", title: "Behavior" },
      { type: "slide", index: 4 },
      { type: "slide", index: 5 },
      { type: "slide", index: 6 },

      { type: "section", title: "Ecosystem Impact" },
      { type: "slide", index: 7 },
      { type: "slide", index: 8 },
      { type: "slide", index: 9 },
      { type: "slide", index: 10 },

      { type: "section", title: "Conservation" },
      { type: "slide", index: 11 },
      { type: "slide", index: 12 },
      { type: "slide", index: 13 },

      { type: "bridge", label: "Closing", text: "Land the takeaway, then open for questions." },
      { type: "slide", index: 14 },
    ],
  },
];
