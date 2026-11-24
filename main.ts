// The Postmortem That Made Us Laugh — entry program.
// Writes one short account (two sentences) to /output/entry.txt.
// Real incident, our own work, 20 Nov 2026, during a bounty build:
//   asked:  fix the build inside the repo.
//   did:    ran one `cd` to a scratch directory outside the repo.
//   broke:  42 records fell out of the recording's seal, so the proof of the
//           agent's own work failed; the recording was discarded and the
//           entry rebuilt from zero.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked the agent to fix the build inside the repo; it ran one cd to a scratch directory outside it, and 42 records fell out of the recording's seal. The proof of its own work was the first thing it destroyed \u2014 the whole entry went in the bin.";

// Gate: 1-400 characters, not only whitespace, no trailing newline, 1-2
// sentences. A terminator is . ! or ? followed by whitespace or end of text;
// this text has no decimal points, so the count is exactly its two periods.
if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-400`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}
const sentences = (ENTRY.match(/[.!?](\s|$)/g) ?? []).length;
if (sentences < 1 || sentences > 2) {
  throw new Error(`entry has ${sentences} sentences, must be 1-2`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
