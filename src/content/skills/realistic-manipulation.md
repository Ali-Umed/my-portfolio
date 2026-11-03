---
title: "Realistic Photo Manipulation"
published: 2026-11-03
draft: false
description: "A Claude skill that makes cinematic photo manipulations that look like one real photograph, not a pasted sticker. Here is the skill, the prompt, and a full project made with it."
image: "/images/skills/dont-be-afraid/1.jpg"
tags: ["PhotoCraft", "Photo manipulation", "Prompt"]
category: "Claude Skill"
download: "/skills/realistic-manipulation.zip"
---

## What it does

This skill teaches Claude how I make realistic photo manipulations: giant animals in fog, night scenes lit by a lantern, floods, sea monsters. The goal is simple: **people should believe it is one real photograph.**

Claude does not edit by hand. It writes code that builds every layer (light, mist, rain, shadows), cuts people and animals out of real photos, and puts all the layers together into a real **PhotoCraft** file with named, editable layers.

## Example: "Don't Be Afraid"

A little girl in a yellow raincoat meets a giant wolf on a rainy forest path. It took 6 real photos and 20 layers.

<div class="grid grid-cols-2 gap-3 not-prose">
  <img src="/images/skills/dont-be-afraid/1.jpg" alt="Final image" loading="lazy" class="rounded-xl w-full" />
  <img src="/images/skills/dont-be-afraid/6.jpg" alt="Before and after" loading="lazy" class="rounded-xl w-full" />
  <img src="/images/skills/dont-be-afraid/2.jpg" alt="The 6 source photos" loading="lazy" class="rounded-xl w-full" />
  <img src="/images/skills/dont-be-afraid/3.jpg" alt="All 20 layers" loading="lazy" class="rounded-xl w-full" />
  <img src="/images/skills/dont-be-afraid/4.jpg" alt="PhotoCraft layers list" loading="lazy" class="rounded-xl w-full" />
  <img src="/images/skills/dont-be-afraid/5.jpg" alt="The project open in PhotoCraft" loading="lazy" class="rounded-xl w-full" />
</div>

## The prompt

This was not made with one prompt. It came from many rounds of fixes. This is a cleaned-up version that matches the final image:

```text
Make a realistic, cinematic photo manipulation called "Don't Be Afraid".

A small girl in a yellow raincoat stands on a forest path at night in the rain, seen from behind. She has an old lantern next to her. A giant wolf lowers its head out of the misty forest and almost touches her hood with its nose. It is gentle, not scary.

Use real photos only: a misty pine forest, a wolf with its head down, a child in a yellow raincoat from behind, a lit lantern, a wolf pup, and ferns. Cut them out cleanly.

Make it look like one real photo:
- The warm lantern light falls on the girl, the ground and the wolf's face.
- Mist sits between the trees and around the wolf's legs.
- Add rain, splashes, puddle reflections, and small rings on the puddle.
- The wolf's fur is wet, its eyes catch the lantern light, and its breath is visible in the cold air.

Hidden details: a wolf pup peeking from behind the trees, moths flying at the lantern, steam rising from the hot lantern, and the girl's small footprints on the wet path.

Keep each part as a separate named layer in a PhotoCraft file. Export at full quality in 4:5 for Instagram.
```

## What is inside the skill

- **SKILL.md**: the step-by-step method (idea, photos, cut-out, layers, realism check, export).
- **techniques.md**: how to do fog giants, night light, water, snow and silhouettes.
- **checklist.md**: what to check before showing a result.
- **taste.md**: my taste and the lessons from real projects. Keep it or replace it with your own.
- **lift.swift**: cuts people and animals out of photos with Apple Vision.
- **realism_check.py**: measures if the subject looks pasted on.
- **assemble.py**: builds the layered PhotoCraft file and exports JPEG + PNG.
- **social_pack.py**: only when you ask, makes the post pack you see above: Instagram and Facebook post, source photos, all layers, the PhotoCraft layers list, the app screenshot and before/after.
- **examples**: four build scripts (including this wolf scene), a finished piece, and one rejected "sticker" example.

## How to install

**Claude Code:** unzip and copy the folder to `~/.claude/skills/realistic-manipulation/`.

**Claude apps:** upload the zip under Settings → Capabilities → Skills.

Build the cut-out tool once on your Mac:

```bash
cd ~/.claude/skills/realistic-manipulation/scripts && swiftc -O lift.swift -o lift
```

**Needs:** macOS, Python 3 (numpy, scipy, Pillow), and PhotoCraft with `photocraft-cli`. Example photos are from Unsplash.

Then just ask Claude for a manipulation, for example: *"Make a giant whale swimming through the fog over a city at night."* When it is done, ask *"make the post pack for Instagram and Facebook"* to get the slides.
