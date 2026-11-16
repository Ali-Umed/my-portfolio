---
title: "GridCraft Spreadsheets with Code"
published: 2026-11-16
draft: false
description: "A Claude skill that builds real Excel spreadsheets in GridCraft with code. Episode 1 of my series \"One car, 17 apps\": one prompt builds a hypercar spec sheet where every number is a formula. Here is the skill, the prompt, and the files."
image: "/images/skills/gridcraft-ep01/cover.jpg"
tags: ["GridCraft", "Spreadsheet", "Prompt", "YouTube"]
category: "Claude Skill"
download: "/skills/gridcraft.zip"
---

## What it does

This skill lets Claude build spreadsheets in **GridCraft**, the open-source Excel-style app from the ArtCraft suite.

Claude does not click around the app. It writes the sheet as commands and runs them with `gridcraft-cli`: formulas,
number formats, tables, page setup and PDF export. At the end it checks that every formula recalculates. You get a
real `.xlsx` file that opens in Excel, Numbers and Google Sheets.

## Episode 1 of "One car, 17 apps"

In my YouTube series, Claude builds one piece of the Moon R1 hypercar with one Craft app per episode.
In Episode 1, one prompt builds the car's spec sheet. The video shows the real Claude session, start to finish.

<div class="aspect-video w-full not-prose">
  <iframe class="w-full h-full rounded-xl" src="https://www.youtube-nocookie.com/embed/oIwImBqNJLY" title="Episode 1: GridCraft" loading="lazy" allowfullscreen></iframe>
</div>

[Watch on YouTube](https://youtu.be/oIwImBqNJLY) · [Series trailer](https://youtu.be/re2fNLxR4pA)

## The prompt

```text
Make a spec sheet for my Moon R1 hypercar in GridCraft, using gridcraft-cli.
Inputs: 4,720 mm long, 2,040 mm wide, 1,140 mm high, 2,760 mm wheelbase. A 1,100 PS
twin-turbo V8 plus 400 PS of electric motors. 1,580 kg. Drag coefficient 0.38, the car
fills 85% of its width x height box, 88% drivetrain efficiency, tyre grip 1.3, 0.25 s
launch loss, top speed limited to 420 km/h.
Calculate everything else with real formulas: combined power, power-to-weight,
0-100 km/h (grip-limited), top speed, 100-0 km/h braking.
Keep tyre grip as its own input cell so I can change it later. Make it clean and
readable, then save moon-spec.xlsx and moon-spec.pdf in this folder.
```

## What Claude did

- Read how GridCraft works: the design guide and the command reference.
- Python was blocked in that folder, so it changed plan and used only `gridcraft-cli`.
- Wrote the whole sheet as one script: named cells, inputs and **23 formulas**.
- Tested itself: set the grip to 2.5 and checked the answer against its own hand calculation.
- Exported a PDF, spotted two columns that were too close, and fixed them.
- Checked the file: 23 formulas, 23 matched.

<img src="/images/skills/gridcraft-ep01/f40.jpg" alt="The replayed Claude session" loading="lazy" class="rounded-xl w-full not-prose" />

## The best part: make it rain

It is a real, editable file. Change one input, tyre grip, from dry (1.30) to wet (0.70), and the sheet updates itself:

| | Dry | Wet |
|---|---|---|
| 0–100 km/h | 2.43 s | 4.30 s |
| 100–0 km/h braking | 30.3 m | 56.2 m |

<img src="/images/skills/gridcraft-ep01/f100.jpg" alt="Dry vs wet" loading="lazy" class="rounded-xl w-full not-prose" />

## What is inside the skill

- **SKILL.md**: how Claude builds, edits and checks a workbook with `gridcraft-cli`.
- **scripts/gridcraft.py**: validates a recipe, runs it, and scores the result (a critic that proves the formulas recalculate).
- **templates**: budget, invoice, loan, P&L, timesheet, sales dashboard, project tracker and a Kurdish (RTL) budget.
- **references**: every GridCraft command and function, a design guide and a cookbook.
- **examples/episode-01**: the prompt, `moon-spec.xlsx`, `moon-spec.pdf` and the wet-road version.

## How to install

**Claude Code:** unzip and copy the folder to `~/.claude/skills/gridcraft/`.

**Claude apps:** upload the zip under Settings → Capabilities → Skills.

**Needs:** GridCraft with `gridcraft-cli` and Python 3.

Then ask Claude for a spreadsheet, for example: *"Make a monthly budget in GridCraft with a savings chart, and keep the income as input cells."*
