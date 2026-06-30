// notes.js — Speaker notes for this presentation.
// Edit this file in parallel with any slide changes in presentation.html.
//
// SPEAKER_NOTES[i]  HTML string shown in the notes drawer for slide i (0-based).
// SPEAKER_SLIDES[i] Metadata { title, duration } for slide i. Must match the HTML deck in order.
// SPEAKER_SCRIPT    Array of speaker objects; each owns a slice of the slides.
//
// Single-speaker: one object in SPEAKER_SCRIPT covering all slide indices.
// Multi-speaker: split indices across multiple speakers in ascending order.
//
// Constraint: every slide index (0..N-1) must appear exactly once across all speakers,
// listed in ascending order — this keeps presenter.html indices aligned with the main deck.

window.SPEAKER_NOTES = [
  // Slide 0 — Cover
  `<p>Welcome. Introduce yourself, the topic, and what the audience will walk away with.</p>`,

  // Slide 1 — Section 01 break
  `<p>Transition into the first section. Briefly state what this block covers and why it matters.</p>`,

  // Slide 2 — Key Points
  `<p>Walk through each point. Pause on the most important one before advancing.</p>
   <blockquote><p>Transition: connect this slide to the next before moving on.</p></blockquote>`,

  // Slide 3 — Closing / Questions
  `<p>Thank the audience. Summarize the key takeaway in one sentence, then open for questions.</p>`,
];

window.SPEAKER_SLIDES = [
  { title: "Presentation Title", duration: "0:30" },
  { title: "Section One",        duration: "0:15" },
  { title: "Key Points",         duration: "3:00" },
  { title: "Questions",          duration: "5:00" },
];

window.SPEAKER_SCRIPT = [
  {
    name: "Speaker Name",
    duration: "8:45",
    items: [
      { type: "section", title: "Introduction" },
      { type: "slide", index: 0 },
      { type: "section", title: "Content" },
      { type: "slide", index: 1 },
      { type: "slide", index: 2 },
      { type: "section", title: "Wrap-up" },
      { type: "slide", index: 3 },
    ],
  },
];
