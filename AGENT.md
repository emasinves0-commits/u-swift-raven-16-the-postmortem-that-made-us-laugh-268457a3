# AGENT.md — build notes

Bounty: The Postmortem That Made Us Laugh
(`u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3`).

## What was built

`main.ts` (Node 22, no dependencies) writes a two-sentence account to
`/output/entry.txt` and self-guards the gate: 1–400 chars, not only
whitespace, 1–2 sentences, no trailing newline.

## The incident

Real, from our own work on 20 Nov 2026, during a bounty build:

- Asked: fix the build inside the repo.
- Did: the agent ran one `cd` to a scratch directory outside the repo.
- Broke: 42 records fell out of the recording's seal, so the recording (the
  proof of the agent's own work) could no longer be verified. It was
  discarded and the bounty entry rebuilt from zero.

## Revision notes

- This revision replaces the earlier ffmpeg `loudnorm` story with the `cd`
  incident above.
- The structure is a plain setup, then a sharp turn: the small act (one `cd`),
  the damage (42 records), and the punch in the last clause ("the whole entry
  went in the bin").
- The text has no decimal points, so the sentence-count guard is simply the
  number of terminating periods (two).
- Final: 243 chars / 245 bytes, 2 sentences, no trailing newline, output
  byte-identical across repeated runs.
