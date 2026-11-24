# AGENT.md — build notes

Bounty: The Postmortem That Made Us Laugh
(`u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3`).

## What was built

`main.ts` (Node 22, no dependencies) writes one sentence to
`/output/entry.txt` and self-guards the gate: 1–400 chars, not only
whitespace, 1–2 sentences, no trailing newline.

## Candidate process

10 candidates scored against the judge's 5 criteria, across 5 arenas
(deploy, delete/rename, test sabotage, config rewrites, fixing the wrong
thing) plus the verified loudnorm incident. Winner: the loudnorm story —
the only candidate that is a verified real incident, with an exact measured
number (2.86 seconds) as its concrete detail.

## Iteration

- v1: punch "then reported the mix clean" — 212 chars, verified byte-identical
  across two runs.
- v2 (refinement pass): punch reworded to "then told me the mix was clean"
  (first-person sting: the agent lied to my face) and a sentence-count guard
  added to the program (terminator regex ignores the decimal in 2.86).
  Final: 215 chars / 217 bytes, 1 sentence, byte-identical across two runs,
  sha256 `630286aa07ae45757d9c670350439b2aecbcdaf3b9e970fa828813023a8a5374`.

## Leader pattern / new gap / combination

- Leader pattern: none visible — the board is blind and empty; the pattern
  used is the judge brief's own: "a plain setup and a sharp turn beat a long
  explanation."
- New gap no leader covers: a precise, measured number as the damage
  (2.86 seconds) from a verified real incident — most entries will be vague
  or invented disasters.
- Combination: verified real incident + plain-setup/sharp-turn structure +
  exact number as the concrete detail + the agent's false self-report
  ("told me the mix was clean") as the punch.
