---
title: "VectorCraft Logos with Code"
published: 2026-11-19
draft: false
description: "A Claude skill that makes real vector art in VectorCraft with code. Episode 3 of my series \"One car, 17 apps\": one prompt designs a hypercar logo kit from the car's real blueprint, and one swatch edit recolours all of it. Here is the skill, the prompt, and the files."
image: "/images/skills/vectorcraft-ep03/cover.jpg"
tags: ["VectorCraft", "Logo", "Prompt", "YouTube"]
category: "Claude Skill"
download: "/skills/vectorcraft.zip"
---

## What it does

This skill lets Claude design in **VectorCraft**, the open-source Illustrator-style app from the ArtCraft suite.

Claude does not click around the app. It writes the design as commands and runs them with `vectorcraft-cli`: shapes,
paths, Pathfinder, global swatches, type, layers and exports. You get a real `.vectorcraft` file with editable layers,
plus SVG and PDF that open in Illustrator, Figma and any browser.

## Episode 3 of "One car, 17 apps"

In my YouTube series, Claude builds one piece of the Moon R1 hypercar with one Craft app per episode.
In Episode 3, one prompt designs the car's logo kit, using the blueprint from Episode 2. The video shows the real
Claude session, start to finish.

<div class="aspect-video w-full not-prose">
  <iframe class="w-full h-full rounded-xl" src="https://www.youtube-nocookie.com/embed/_W20uApqubo" title="Episode 3: VectorCraft" loading="lazy" allowfullscreen></iframe>
</div>

[Watch on YouTube](https://youtu.be/_W20uApqubo) · [Episode 2](https://youtu.be/NhS7boB-8WI) · [Episode 1](https://youtu.be/oIwImBqNJLY) · [Series trailer](https://youtu.be/re2fNLxR4pA)

## The prompt

```text
Design the Moon R1 logo kit in VectorCraft, using vectorcraft-cli.
moon-blueprint.dxf is the car's blueprint from Episode 2. Take the real side-view roofline from it (don't draw a made-up car) and build the logo around it.
Make four pieces on one sheet: a round badge, a "Moon R1" wordmark, an app icon and a small nose badge for the car. Bold and flat, no gradients or shadows: Night #1C1F24, white, and one orange #FF5A1F.
Make that orange one global swatch called "Moon Orange" and use it everywhere orange appears, so the whole kit can change colour by editing just that swatch.
Save moon-logo.vectorcraft, moon-logo.svg and moon-logo.pdf in this folder.
Only vectorcraft-cli is allowed here: call it as plain vectorcraft-cli, from this folder.
```

## What Claude did

- Opened the Episode 2 blueprint: 336 objects on 11 layers.
- Found the real car: the side view, path 28 on the `MOON-BODY` layer.
- Hit small walls (a command that doesn't exist, a reference that points nowhere) and fixed each one from the error.
- First idea: cut a thin band off the top of the car. It looked at the result and didn't like it: the wheel arches
  left bumps and notches.
- Found a cleaner cut: split the outline at the nose and the tail. What's left is the real roofline, 134 points
  straight from the blueprint.
- Linked every orange to one global swatch, **Moon Orange**, saved three files, and checked its work: 6 oranges, all 6 linked.

<img src="/images/skills/vectorcraft-ep03/replay.jpg" alt="The replayed Claude session" loading="lazy" class="rounded-xl w-full not-prose" />

<img src="/images/skills/vectorcraft-ep03/sheet.jpg" alt="The Moon R1 logo kit: round badge, wordmark, app icon and nose badge" loading="lazy" class="rounded-xl w-full not-prose" />

## The best part: what if it's blue?

It is a real, editable file, not a picture. One `swatch.edit` command changes the Moon Orange swatch, and the whole
kit turns blue: the badge, the wordmark, the app icon and the nose badge.

| | Before | 1 edit |
|---|---|---|
| Moon Orange swatch | #FF5A1F | #2E6BFF |
| Linked objects | 6 orange | 6 blue |

Nobody repainted a thing.

<img src="/images/skills/vectorcraft-ep03/after.jpg" alt="The whole kit turned blue with one swatch edit" loading="lazy" class="rounded-xl w-full not-prose" />

## What is inside the skill

- **SKILL.md**: how Claude makes, edits and checks vector art with `vectorcraft-cli`.
- **scripts**: validates a recipe, runs it, renders it and scores it (a critic for design rules).
- **templates**: logo badge and lockup, app icon, icon set, social post, story, banner, print poster, Kurdish post.
- **references**: every VectorCraft command, a design guide and a cookbook.
- **examples/episode-03**: the prompt, `moon-blueprint.dxf`, `moon-logo.vectorcraft`, `.svg`, `.pdf` and the blue version.

## How to install

**Claude Code:** unzip and copy the folder to `~/.claude/skills/vectorcraft/`.

**Claude apps:** upload the zip under Settings → Capabilities → Skills.

**Needs:** VectorCraft with `vectorcraft-cli` and Python 3.

Then ask Claude for a design, for example: *"Make a round badge logo for my coffee shop in VectorCraft, with one global brand swatch, and export SVG and PDF."*
