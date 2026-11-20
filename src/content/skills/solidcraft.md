---
title: "SolidCraft 3D Models with Code"
published: 2026-11-21
draft: false
description: "A Claude skill that builds parametric 3D models in SolidCraft with code. Episode 4 of my series \"One car, 17 apps\": one prompt builds a hypercar in 3D from its real blueprint, and changing one number gives it a giant wing. Here is the skill, the prompt, and the files."
image: "/images/skills/solidcraft-ep04/cover.jpg"
tags: ["SolidCraft", "3D", "CAD", "Prompt", "YouTube"]
category: "Claude Skill"
download: "/skills/solidcraft.zip"
---

## What it does

This skill lets Claude model in **SolidCraft**, a Fusion 360-style parametric CAD app.

Claude does not click around the app. It writes the model as commands and runs them with `solidcraft-cli`: sketches,
extrudes, lofts, named parameters, colours, snapshots and exports. You get a real `.sc` design where every parameter
is still live, plus a STEP file that opens in Fusion 360, SolidWorks and any CAD app.

## Episode 4 of "One car, 17 apps"

In my YouTube series, Claude builds one piece of the Moon R1 hypercar with one Craft app per episode.
In Episode 4, one prompt builds the car in 3D, using the blueprint outlines from Episode 2. The video shows the real
Claude session, start to finish.

<div class="aspect-video w-full not-prose">
  <iframe class="w-full h-full rounded-xl" src="https://www.youtube-nocookie.com/embed/NJ0bcjItuYA" title="Episode 4: SolidCraft" loading="lazy" allowfullscreen></iframe>
</div>

[Watch on YouTube](https://youtu.be/NJ0bcjItuYA) · [Episode 3](https://youtu.be/_W20uApqubo) · [Episode 2](https://youtu.be/NhS7boB-8WI) · [Episode 1](https://youtu.be/oIwImBqNJLY) · [Series trailer](https://youtu.be/re2fNLxR4pA)

## The prompt

```text
Build the Moon R1 in 3D in SolidCraft, using solidcraft-cli.
moon-r1-outlines.json is the car's blueprint from Episode 2: side, plan, front and rear outlines in millimetres. Use those real outlines for the shape (don't invent a car).
Make a clean concept model: the body, the black cabin and glass, four wheels and the rear wing. Orange body #FF5A1F; black cabin, wheels and wing.
Drive it with named parameters (at least wing_height, wheel_diameter and ride_height), so changing one number rebuilds the model.
Save moon-r1.sc and moon-r1.step in this folder, plus a snapshot moon-r1.png.
Only solidcraft-cli is allowed here: call it as plain solidcraft-cli, from this folder.
```

## What Claude did

- Python was blocked, so it sent two helpers: one read the blueprint outlines, one read SolidCraft's commands.
- Planned the body: the side outline pushed across the car's width, trimmed by the view from above.
- Wrote the parameters first: `wheel_diameter`, `ride_height` and `wing_height`.
- The first build failed on a seam tolerance, so it switched to a loft from the front section to the rear.
- Then the body looked like a flat slab. It checked the numbers (4,720 × 2,036 mm, 140 to 1,140 mm high): the shape
  was right, only the camera angle was wrong.
- Two more steps failed. It moved one cut 10 mm and kept the wing in separate pieces.
- Saved three files and tested itself: wing up, car higher, bigger wheels, all in one rebuild.

<img src="/images/skills/solidcraft-ep04/replay.jpg" alt="The replayed Claude session" loading="lazy" class="rounded-xl w-full not-prose" />

<img src="/images/skills/solidcraft-ep04/sheet.jpg" alt="The Moon R1 in 3D in SolidCraft" loading="lazy" class="rounded-xl w-full not-prose" />

## The best part: what if it had a giant wing?

It is a real 3D model, not a picture. One command changes one parameter, and SolidCraft rebuilds the whole model in
about 5 seconds: the posts grow and the wing goes up 36 cm.

| | Before | 1 edit |
|---|---|---|
| wing_height | 1,136 mm | 1,500 mm |
| Car height | 1,182 mm | 1,546 mm |

Nobody moved a thing by hand.

<img src="/images/skills/solidcraft-ep04/after.jpg" alt="The car with a giant wing after one parameter change" loading="lazy" class="rounded-xl w-full not-prose" />

## What is inside the skill

- **SKILL.md**: how Claude builds, changes and checks 3D models with `solidcraft-cli`, including the lessons from
  this episode (parameters, the two-view body, boolean fixes, turntable snapshots).
- **examples/episode-04**: the prompt, `moon-r1-outlines.json`, `moon-r1.sc` (live parameters), `moon-r1.step`,
  `moon-r1.png` and `wing.json`, the one-line change that gives it the giant wing.

## How to install

**Claude Code:** unzip and copy the folder to `~/.claude/skills/solidcraft/`.

**Claude apps:** upload the zip under Settings → Capabilities → Skills.

**Needs:** SolidCraft with `solidcraft-cli`.

Then ask Claude for a model, for example: *"Model a phone stand in SolidCraft with a parameter for the phone's thickness, and export STL for 3D printing."*
