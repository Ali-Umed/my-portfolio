---
title: "CADCraft Drawings with Code"
published: 2026-11-18
draft: false
description: "A Claude skill that draws real CAD drawings in CADCraft with code. Episode 2 of my series \"One car, 17 apps\": one prompt draws a hypercar blueprint where every dimension measures the drawing itself. Here is the skill, the prompt, and the files."
image: "/images/skills/cadcraft-ep02/cover.jpg"
tags: ["CADCraft", "CAD", "Prompt", "YouTube"]
category: "Claude Skill"
download: "/skills/cadcraft.zip"
---

## What it does

This skill lets Claude draw in **CADCraft**, the open-source AutoCAD-style app from the ArtCraft suite.

Claude does not click around the app. It writes the drawing as commands and runs them with `cadcraft-cli`: layers,
lines, fills, dimensions, hatches, title blocks and PDF export. You get a real `.dxf` file that opens in AutoCAD and
any CAD app, and a PDF ready to print.

## Episode 2 of "One car, 17 apps"

In my YouTube series, Claude builds one piece of the Moon R1 hypercar with one Craft app per episode.
In Episode 2, one prompt draws the car's blueprint, using the spreadsheet from Episode 1. The video shows the real
Claude session, start to finish.

<div class="aspect-video w-full not-prose">
  <iframe class="w-full h-full rounded-xl" src="https://www.youtube-nocookie.com/embed/NhS7boB-8WI" title="Episode 2: CADCraft" loading="lazy" allowfullscreen></iframe>
</div>

[Watch on YouTube](https://youtu.be/NhS7boB-8WI) · [Episode 1](https://youtu.be/oIwImBqNJLY) · [Series trailer](https://youtu.be/re2fNLxR4pA)

## The prompt

```text
Draw the Moon R1 blueprint in CADCraft, using cadcraft-cli.
moon-spec.xlsx is the car's spec sheet from Episode 1 (read the sizes from it with gridcraft-cli). moon-r1-outlines.json has the outlines of the side, plan, front and rear views in millimetres.
Put the four views on one sheet like a real package drawing: body orange, glass and tyres black, thin black edges.
Dimension the length, wheelbase, overhangs, width, height and front and rear tracks. The dimensions must measure the drawing itself (no typed numbers), so they update if the car changes.
Save moon-blueprint.dxf and moon-blueprint.pdf in this folder.
```

## What Claude did

- Read both inputs, and read the Episode 1 spreadsheet through GridCraft.
- Python was blocked, so it read the outlines with `jq` instead.
- Tested first: one line, one dimension, one stretch, to prove a dimension follows the drawing.
- Checked the numbers: the wheels are exactly 2,760 mm apart, the same as the spec sheet.
- Hit more walls (`jq -f`, `$` signs, `xargs`) and found a way past every one: in the end it drove CADCraft
  through its own MCP server, fed from a file.
- Finished an A2 sheet at 1:20: four views, a title block, and **8 of 8 dimensions linked** to the drawing.

<img src="/images/skills/cadcraft-ep02/replay.jpg" alt="The replayed Claude session" loading="lazy" class="rounded-xl w-full not-prose" />

<img src="/images/skills/cadcraft-ep02/sheet.jpg" alt="The Moon R1 blueprint on an A2 sheet" loading="lazy" class="rounded-xl w-full not-prose" />

## The best part: make it 30 cm longer

It is a real drawing, not a picture. One `stretch` command moves the rear of the car 300 mm, and every dimension
measures itself again:

| | Before | +30 cm |
|---|---|---|
| Wheelbase | 2,760 mm | 3,060 mm |
| Length | 4,720 mm | 5,020 mm |

Nobody typed a number.

<img src="/images/skills/cadcraft-ep02/after.jpg" alt="The car stretched 30 cm, dimensions updated" loading="lazy" class="rounded-xl w-full not-prose" />

## What is inside the skill

- **SKILL.md**: how Claude draws, edits and checks a drawing with `cadcraft-cli`.
- **scripts/cadcraft.py**: validates a recipe, runs it, renders it and scores it (a critic for drafting standards).
- **templates**: plate, bracket, flange, floor plan, site plan, A4/A3 sheets with title blocks, and Kurdish versions.
- **references**: every CADCraft command, a drafting design guide and a cookbook.
- **examples/episode-02**: the prompt, the inputs, `moon-blueprint.dxf`, `moon-blueprint.pdf` and the 30 cm longer version.

## How to install

**Claude Code:** unzip and copy the folder to `~/.claude/skills/cadcraft/`.

**Claude apps:** upload the zip under Settings → Capabilities → Skills.

**Needs:** CADCraft with `cadcraft-cli` and Python 3.

Then ask Claude for a drawing, for example: *"Draw a 120 x 80 mm mounting plate with four M6 holes in CADCraft, dimension it, and put it on an A4 sheet."*
