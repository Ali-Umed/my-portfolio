---
title: "MaterialCraft Materials with Code"
published: 2026-11-23
draft: false
description: "A Claude skill that builds procedural PBR materials in MaterialCraft with code. Episode 5 of my series \"One car, 17 apps\": one prompt makes a hypercar's Moon Orange paint and a real carbon fibre weave, and one setting turns the paint matte. Here is the skill, the prompt, and the files."
image: "/images/skills/materialcraft-ep05/cover.jpg"
tags: ["MaterialCraft", "Materials", "3D", "Prompt", "YouTube"]
category: "Claude Skill"
download: "/skills/materialcraft.zip"
---

## What it does

This skill lets Claude build materials in **MaterialCraft**, a Substance Designer-style node graph app from the
ArtCraft suite.

Claude does not click around the app. It builds the node graph as commands with `materialcraft-cli`: templates,
pattern functions, exposed inputs, previews on the material ball, and texture map export. You get a real `.sbs`
package where every node and input is still live, plus PBR texture maps for Blender, Unreal or any 3D app.

## Episode 5 of "One car, 17 apps"

In my YouTube series, Claude builds one piece of the Moon R1 hypercar with one Craft app per episode.
In Episode 5, one prompt makes the car's paint and carbon fibre, taking the exact orange from the Episode 3 logo
file. The video shows the real Claude session, start to finish.

<div class="aspect-video w-full not-prose">
  <iframe class="w-full h-full rounded-xl" src="https://www.youtube-nocookie.com/embed/k2PaWwfpDEk" title="Episode 5: MaterialCraft" loading="lazy" allowfullscreen></iframe>
</div>

[Watch on YouTube](https://youtu.be/k2PaWwfpDEk) · [The Short](https://youtube.com/shorts/v-ZH0l1AY74) · [Episode 4](https://youtu.be/NJ0bcjItuYA) · [Episode 3](https://youtu.be/_W20uApqubo) · [Series trailer](https://youtu.be/re2fNLxR4pA)

## The prompt

```text
Make the Moon R1's materials in MaterialCraft, using materialcraft-cli.
moon-logo.svg is the car's logo kit from Episode 3. Take the Moon Orange from it for the paint.
Make one package, moon-materials.sbs, with two materials: a glossy Moon Orange car paint, and a black carbon fibre twill weave for the roof and wing. Build the weave pattern yourself from the node library.
Expose the paint's colour and roughness, and the carbon's weave size, as graph inputs, so each can be changed later with one --set.
Render a preview of each on the material ball (paint.png and carbon.png) and export the maps into a maps folder.
Only materialcraft-cli is allowed here: call it as plain materialcraft-cli, from this folder.
```

## What Claude did

- Opened the Episode 3 logo file and found the exact Moon Orange, `#ff5a1f`.
- Found no carbon pattern in the library, so it wrote the 2×2 twill weave itself, as a small Pixel Processor function.
- Built the paint, hit one small error (a node that wasn't selected), and fixed it on the second try.
- Tested its own settings: colour and roughness both change with one `--set`.
- The first carbon looked too bumpy. It tested one cause at a time: not the height, the normal map.
- Finished with glossy black twill under a clear coat, checked that the weave size works and the texture tiles
  seamlessly, and exported 12 texture maps.

<img src="/images/skills/materialcraft-ep05/replay.jpg" alt="The replayed Claude session" loading="lazy" class="rounded-xl w-full not-prose" />

<img src="/images/skills/materialcraft-ep05/sheet.jpg" alt="Moon Orange paint and carbon fibre on the material ball" loading="lazy" class="rounded-xl w-full not-prose" />

## The best part: what if it was matte?

These are real, editable materials, not pictures. One command changes one number, and the shine is gone:

| | Before | 1 edit |
|---|---|---|
| roughness | 0.08 | 0.80 |
| Finish | Gloss | Matte |

Nobody painted a single pixel.

<img src="/images/skills/materialcraft-ep05/after.jpg" alt="The same paint, matte after one setting" loading="lazy" class="rounded-xl w-full not-prose" />

## What is inside the skill

- **SKILL.md**: how Claude builds, changes and checks materials with `materialcraft-cli`, including this episode's
  lessons (pixel-processor patterns, exposed inputs, normal-map fixes, turntable renders).
- **examples/episode-05**: the prompt, `moon-materials.sbs` with its three live inputs, `paint.png`, `carbon.png`
  and the matte version.

## How to install

**Claude Code:** unzip and copy the folder to `~/.claude/skills/materialcraft/`.

**Claude apps:** upload the zip under Settings → Capabilities → Skills.

**Needs:** MaterialCraft with `materialcraft-cli`.

Then ask Claude for a material, for example: *"Make a worn red brick wall material in MaterialCraft with a setting for how dirty it is, and export the texture maps."*
