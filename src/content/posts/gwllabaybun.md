---
title: "گوڵە بەیبوون - Language Learning Mobile App"
published: 2026-06-06
tags: [Flutter, Next.js, Laravel, Gamification, Kurdish, Language Learning, Dark Mode]
category: Mobile Application
icon: /images/icons/gula-baibun.png
screenshots:
  - ../../assets/screenshots/gula-baibun/1.png
  - ../../assets/screenshots/gula-baibun/2.png
  - ../../assets/screenshots/gula-baibun/3.png
  - ../../assets/screenshots/gula-baibun/4.png
  - ../../assets/screenshots/gula-baibun/5.png
featured: true
appStore: "https://apps.apple.com/ca/app/%DA%AF%D9%88%DA%B5%DB%95-%D8%A8%DB%95%DB%8C%D8%A8%D9%88%D9%80%D9%86/id6757437622"
playStore: "https://play.google.com/store/apps/details?id=com.moonEnglish.moonEnglish"
draft: false
pinned: true
weight: 101
---

**Gula Baibun (گوڵە بەیبوون)** is a modern, gamified **Kurdish-English language learning platform** designed to make mastering English natural, fun, and frictionless for Kurdish speakers.

Combining zero-latency interactive vocabulary cards, mini-games, streak tracking, and competitive leaderboards, Gula Baibun transforms daily English learning into an engaging habit.

> **🌼 Learn English as naturally and refreshing as chamomile — anytime, anywhere, online !**

---

> [!TIP]
> **Why Gula Baibun?** Traditional memorization gets boring fast. Gula Baibun combines **5+ mini-games**, **daily streak motivators**, and **native audio pronunciations** specifically tuned for Kurdish Sorani speakers.

---

## 🚀 Key Features

### 🎮 Interactive Language Games
- **Synonym & Opposite Matching**: Connect related or contrasting words to build intuitive vocabulary depth.
- **Flashcard Quiz**: Practice essential English words, verbs, and common idioms.
- **Hangman & HeadsUp**: Fast-paced word guessing games for individual or group learning.
- **Word Search & Puzzles**: Discover hidden vocabulary grouped by context.

### 🔥 Gamification & Daily Motivation
- **Daily Streak Heatmap**: Watch every learning day light up your calendar and keep your 50+ day streak alive!
- **XP, Leveling & Coins**: Earn experience points with every correct answer and unlock exclusive features.
- **Challenge Medals**: Complete weekly milestones to collect unique digital badges.
- **Global Leaderboard**: Compete against thousands of English learners across Kurdistan.

### 📚 Comprehensive Vocabulary Library
- **Categorized Learning**: Verbs, everyday phrases, business English, travel, and cultural terms.
- **Natural Kurdish Sorani Translations**: Context-aware examples with accurate Kurdish localization (`ckb`).

### 🌐 Cross-Platform & Beautiful UX
- **Multi-Language Interface**: Instant switching between **Kurdish Sorani (کوردی)**, **English**, and **Arabic**.
- **Dark & Light Mode**: Fluid HSL dark-mode theme with glassmorphic cards and dynamic micro-animations.
- **Native Performance**: Built with Flutter for 60fps smooth animations on iOS and Android.

---

## ⚡ Tech Stack Architecture

| Layer | Technologies & Frameworks |
| :--- | :--- |
| **Mobile App** | Flutter (Dart `^3.6`), `flutter_bloc` state management, Hive & SQLite, Secure Storage |
| **Web & Landing** | Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, `next-intl` |
| **Backend API** | Laravel 12 (PHP 8.4), Laravel Sanctum authentication, REST API |
| **Admin Panel** | Filament v4 Dashboard for managing content, categories, and user stats |
| **Localization** | Dual-language support for Kurdish Sorani (`ckb`), English (`en`), and Arabic (`ar`) |

---

## 🏆 Gamification Breakdown

```mermaid
graph TD
    A[Daily Practice] --> B{Complete Lessons}
    B -->|XP Earned| C[Level Up Rank]
    B -->|Active Streak| D[Light up Calendar Heatmap]
    B -->|Complete Challenges| E[Unlock Medals & Coins]
    C --> F[Climb Global Leaderboard]
