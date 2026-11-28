---
title: "TextureCraft Painting with Code"
published: 2026-11-28
draft: false
description: "A Claude skill that textures 3D models in TextureCraft with code. Episode 6 of my series \"One car, 17 apps\": one prompt paints a hypercar with its real paint and carbon fibre, and one command adds twenty years of desert sun. Here is the skill, the prompt, and the files."
image: "/images/skills/texturecraft-ep06/cover.jpg"
tags: ["TextureCraft", "3D", "Texturing", "Prompt", "YouTube"]
category: "Claude Skill"
download: "/skills/texturecraft.zip"
---

## What it does

This skill lets Claude texture 3D models in **TextureCraft**, a Substance Painter-style app from the ArtCraft suite.

Claude does not click around the app. It builds the project as commands with `texturecraft-cli`: new projects from a
mesh, baked mesh maps, fill and image layers with masks, smart materials, cameras, path-traced renders and PBR texture
export. You get a real `.tcraft` project where every layer is still editable, plus textures for Blender, Unreal or any
3D app.

## Episode 6 of "One car, 17 apps"

In my YouTube series, Claude builds one piece of the Moon R1 hypercar with one Craft app per episode.
In Episode 6, one prompt paints the 3D car from Episode 4 with the paint and carbon fibre from Episode 5. The video
shows the real Claude session, start to finish.

<div class="aspect-video w-full not-prose">
  <iframe class="w-full h-full rounded-xl" src="https://www.youtube-nocookie.com/embed/_PcE42gnBzQ" title="Episode 6: TextureCraft" loading="lazy" allowfullscreen></iframe>
</div>

[Watch on YouTube](https://youtu.be/_PcE42gnBzQ) · [The Short](https://youtube.com/shorts/Ot3EcaH9qws) · [Episode 5](https://youtu.be/k2PaWwfpDEk) · [Episode 4](https://youtu.be/NJ0bcjItuYA) · [Series trailer](https://youtu.be/re2fNLxR4pA)

## The prompt

```text
Paint the Moon R1 in TextureCraft, using texturecraft-cli.
moon-r1.glb is the 3D car from Episode 4. moon-materials.sbs and the maps folder are its paint and carbon fibre from Episode 5.
Put the Moon Orange paint on the body and the carbon fibre on the rear wing; make the cabin glossy black glass and the tyres black rubber.
Keep each material on its own named layer, so the car can be changed later with one command.
Save moon-r1.tcraft, render a hero shot moon-r1.png from the front three-quarter view, and export the texture sets into a textures folder.
Only texturecraft-cli is allowed here: call it as plain texturecraft-cli, from this folder.
```

## What Claude did

- Looked at the car: two texture sets, the orange body and everything black.
- Hit a wall: TextureCraft can't open the Episode 5 `.sbs` file, so it used the twelve texture maps that came with it.
- The car has no proper UV layout, so it projected the carbon from three sides (triplanar): no seams.
- Baked the car's shape into maps, then built everything in one 35-step run: each material on its own named layer,
  masked to its parts.
- Looked for the hero angle (side, rear, front three-quarter); one close-up missed the wing, so it looked again from behind.
- Rendered a path-traced hero shot in under seven seconds, exported six textures, and tested itself: one command
  turned the paint blue.

<img src="/images/skills/texturecraft-ep06/replay.jpg" alt="The replayed Claude session" loading="lazy" class="rounded-xl w-full not-prose" />

<img src="/images/skills/texturecraft-ep06/sheet.jpg" alt="The Moon R1 painted in TextureCraft" loading="lazy" class="rounded-xl w-full not-prose" />

## The best part: what if it sat in the sun for 20 years?

It is a real, layered texture project, not a picture. One command adds one layer of sun-faded paint, and the Moon
Orange turns pale and chalky. The carbon wing and the black glass stay untouched.

| | New | 1 edit |
|---|---|---|
| Body paint | Glossy | Faded |
| Body layers | 1 | 2 |

Nobody painted a single stroke.

<img src="/images/skills/texturecraft-ep06/after.jpg" alt="The same car after twenty years of sun" loading="lazy" class="rounded-xl w-full not-prose" />

## What is inside the skill

- **SKILL.md**: how Claude textures, changes and renders models with `texturecraft-cli`, including this episode's
  lessons (MaterialCraft maps as image layers, geometry masks, triplanar projection, cameras, turntables).
- **examples/episode-06**: the prompt, `moon-r1.glb`, Claude's own 35-step `build.json`, the hero render, the six
  textures, and `sun.json`, the one-command sun-faded change.

## How to install

**Claude Code:** unzip and copy the folder to `~/.claude/skills/texturecraft/`.

**Claude apps:** upload the zip under Settings → Capabilities → Skills.

**Needs:** TextureCraft with `texturecraft-cli`.

Then ask Claude for a texture job, for example: *"Texture this helmet model in TextureCraft with worn red paint and scratched metal, and export the textures for Unreal."*
