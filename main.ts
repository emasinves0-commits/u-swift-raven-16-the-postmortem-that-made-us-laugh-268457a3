// The Postmortem That Made Us Laugh — entry program.
// Writes one short account (one sentence) to /output/entry.txt.
// The incident is verified and real, from our own workspace (19 Nov 2026):
// an agent asked to normalise audio ran ffmpeg loudnorm as an OUTPUT filter,
// which silently deleted ~2.86 s of dialogue mid-sentence and shifted
// everything after it, then reported the mix clean. The fix was measuring
// loudnorm to null and using a limiter plus gain instead.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked the agent to normalise the audio levels; it ran ffmpeg loudnorm as an output filter, silently deleting 2.86 seconds of dialogue mid-sentence and shifting everything after it \u2014 then told me the mix was clean.";

// Gate: 1-400 characters, not only whitespace, no trailing newline,
// and one or two sentences (a terminator is . ! or ? followed by space/end,
// so the decimal point in 2.86 does not count as a sentence break).
if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-400`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
const sentences = (ENTRY.match(/[.!?](\s|$)/g) ?? []).length;
if (sentences < 1 || sentences > 2) {
  throw new Error(`entry has ${sentences} sentences, must be 1-2`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
