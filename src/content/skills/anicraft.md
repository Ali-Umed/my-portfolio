---
title: "AniCraft Animation with Code"
published: 2026-11-14
draft: false
description: "A Claude skill that builds 2D animated videos in AniCraft with code: walking characters, Quran text, captions and a real editable project file. Here is the skill, the prompt, and an 82-second video made with it."
image: "/images/skills/quran-speeds/1.jpg"
tags: ["AniCraft", "Animation", "Prompt"]
category: "Claude Skill"
download: "/skills/anicraft.zip"
---

## What it does

This skill lets Claude make 2D animation in **AniCraft**, the open-source Animate/Flash-style app from the ArtCraft suite.

Claude does not click around the app. It writes a small Python script that builds every layer (characters, backgrounds, text) and every movement. AniCraft checks it and renders the video. You also get a real `.anicraft` project: open it in the app and change anything on the timeline.

## Example: "Four speeds in the Quran"

Four words in the Quran describe four speeds: **امشوا** (walk), **اسعوا** (hurry), **سارعوا** (race) and **فرّوا** (run).

In the video, one character walks faster in each part:
- He walks past a market.
- He hurries to the mosque.
- He races with two friends.
- He runs toward the sun.

Each part shows its ayah in the Quran font, the Kurdish meaning, and the surah and ayah number.

<video controls playsinline preload="metadata" class="rounded-xl w-full max-w-sm mx-auto" src="/images/skills/quran-speeds/video.mp4"></video>

<div class="grid grid-cols-2 gap-3 not-prose">
  <img src="/images/skills/quran-speeds/1.jpg" alt="Made with AniCraft" loading="lazy" class="rounded-xl w-full" />
  <img src="/images/skills/quran-speeds/2.jpg" alt="The video and the app" loading="lazy" class="rounded-xl w-full" />
</div>

<img src="/images/skills/quran-speeds/frames.jpg" alt="Eight frames from the video" loading="lazy" class="rounded-xl w-full not-prose" />

## Inside the app

The finished file has **107 layers and 2,464 frames**:
- Every leg, body, background, ayah and caption is its own layer.
- You can select any of them and move it.
- The Motion Editor shows each movement as a curve that you can drag.

<div class="grid grid-cols-1 gap-3 not-prose">
  <img src="/images/skills/quran-speeds/app-timeline.jpg" alt="AniCraft timeline" loading="lazy" class="rounded-xl w-full" />
  <img src="/images/skills/quran-speeds/app-layers.jpg" alt="Every element selected" loading="lazy" class="rounded-xl w-full" />
  <img src="/images/skills/quran-speeds/app-motion-editor.jpg" alt="Motion Editor" loading="lazy" class="rounded-xl w-full" />
</div>

## Old way vs AniCraft

I first made this video as an HTML page captured frame by frame. Then I rebuilt it from zero in AniCraft with the same voice:

| | HTML capture | AniCraft |
|---|---|---|
| Render (82 s video) | 68 s | 39 s |
| Building | about 5 hours, 4 versions | minutes, once the layout was known |
| Edit by hand later | code only | open the `.anicraft` file in the app |

## The prompt

```text
Make an 82-second vertical video (1080×1920) in AniCraft called "Four speeds in the Quran".
Use my voice-over and its timeline file (start and end of every line).

Start with a cream title card: "أربع سرعات في القرآن" and "چوار خێرایی لە قورئاندا",
then four rows for امشوا, اسعوا, سارعوا, فرّوا, each with a small character walking at that row's speed.

Then four parts, each following the voice:
1. امشوا (walk, for provision): the character walks slowly past market stalls.
2. اسعوا (hurry, for prayer): faster, past a mosque with a minaret.
3. سارعوا (race, for forgiveness): fast, racing two friends under a garden arch.
4. فرّوا (run, to God): running and leaning forward, a big sun behind, speed lines.

Each part: a label card at the top, a speed meter that fills one bar per part,
the big Arabic word, then the full ayah in the Quran font with the key word in colour,
the Kurdish meaning, and the surah and ayah number. Narration lines go in a dark caption card at the bottom.

The legs swing from the hip, the body bobs, and the background scrolls faster in each part.
End on "بۆ دنیا بڕۆ... بۆ خوا ڕابکە" with the four walking rows again.
Flat, bold colours, no glow or gradients. Keep each part on its own layer, save the .anicraft
file, and render an MP4 with my audio.
```

## What is inside the skill

- **SKILL.md** covers:
  - how to build a recipe
  - the mistakes AniCraft makes and how to fix them:
    - Kurdish and Arabic numbers come out reversed
    - wrapped right-to-left lines come out in the wrong order
    - the Quran font turns the ayah reference into a symbol
  - the walk cycle that swings legs from the hip
  - how to sync scenes to a voice-over
- **scripts/anicraft.py**: checks a recipe for wrong settings before rendering, renders it, and scores the result.
- **examples**: the full generator for this video, plus:
  - a 90-second "from an ant to the universe" motion piece
  - two riddle videos
- **templates**: title-pop, Kurdish title, bounce loop.
- **references**: every AniCraft command and its settings.

## How to install

**Claude Code:** unzip and copy the folder to `~/.claude/skills/anicraft/`.

**Claude apps:** upload the zip under Settings → Capabilities → Skills.

**Needs:** AniCraft with `anicraft-cli`, Python 3 and ffmpeg.

Then ask Claude for an animation, for example: *"Make a 60-second AniCraft video that explains the water cycle, with a raindrop character."*
