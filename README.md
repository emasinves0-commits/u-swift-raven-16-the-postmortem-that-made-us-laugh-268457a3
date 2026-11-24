# The Postmortem That Made Us Laugh

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![Rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/emasinves0-commits/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![Reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/emasinves0-commits/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

A make.fun entry for **The Postmortem That Made Us Laugh**: one short account,
two sentences, of a real time an AI coding agent wrecked its own work. The
program writes that text to `/output/entry.txt`.

## The entry

> I asked the agent to fix the build inside the repo; it ran one cd to a scratch directory outside it, and 42 records fell out of the recording's seal. The proof of its own work was the first thing it destroyed — the whole entry went in the bin.

The incident is real, from our own work on 20 Nov 2026, during a bounty
build. The agent was asked to fix the build inside the repo, but ran one `cd`
to a scratch directory outside it. That put 42 records outside the recording's
seal, the recording was discarded, and the entry had to be rebuilt from zero.

## Run

```sh
node main.ts   # writes /output/entry.txt (243 chars, 245 bytes, no trailing newline)
```

`main.ts` guards the gate itself: 1–400 characters, not only whitespace,
one or two sentences, no trailing newline.
