---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: "Open-Source RC Lap Timing System for Clubs and DIY Tracks | OpenStint"
titleTemplate: false
description: "Build a complete RC lap timing system for about $65 from an RTL-SDR, a wire loop and free software. Works with OpenStint, RC3, RC4, MRT and Vostok transponders."

hero:
  name: "Open-Source RC Lap Timing System"
  text: "for Clubs and DIY Tracks"
  tagline: "Build a complete RC lap timing system from an RTL-SDR, a wire loop, and free software. Compatible with OpenStint, RC3, RC4, MRT and other transponders."
  image:
    src: /openstint-loop.jpg
    alt: OpenStint timing loop installed across the start/finish line of an outdoor RC track
  actions:
    - theme: brand
      text: Build the $65 system
      link: /decoder/docs/setup-simple-rtlsdr
    - theme: alt
      text: How it works
      link: /decoder/docs/introduction
    - theme: alt
      text: Windows downloads
      link: https://github.com/zsellera/openstint/releases

features:
  - icon: 💸
    title: About $65 in hardware
    details: An RTL-SDR dongle, a balun, coax and some wire. No proprietary decoder box.
  - icon: 🎉
    title: Works with your transponders
    details: OpenStint, RC3, RC4 and RC4 Hybrid, RC3 clones (MRT, Waldo), Vostok and RCHourGlass.
  - icon: 🏁
    title: Plugs into scoring software
    details: Native LapBeeps support, plus bundled bridges for RCGTiming and ZRound.
  - icon: 🖥️
    title: Windows or Raspberry Pi
    details: Run it from a race-day laptop, or as a permanent decoder on a Raspberry Pi 3 B+ or newer.
---

## What OpenStint is

OpenStint is a free, open-source lap timing decoder for motorsport racing. It uses the same technology as professional timing systems (from club events to Formula 1): each car carries a small **active transponder**, and a **wire loop** laid across the track picks up its signal as the car passes.

The difference is the decoder. Instead of a dedicated, expensive decoder box, OpenStint uses an inexpensive **software-defined radio (SDR)** plugged into a computer. The software demodulates the transponder signal, identifies the car, timestamps the passing, and hands the result to your lap counting and race management software.

It is aimed at clubs, private tracks and anyone who wants reliable transponder timing.

## Compatible transponders

OpenStint decodes several transponder families, so drivers can usually keep what they have:

- **OpenStint transponder**: [open-source hardware](https://github.com/zsellera/openstint-transponder), designed for this decoder. [Preprogrammed boards](/decoder/docs/purchase-transponder) are available for purchase.
- **AMB RC3** and **RC3 clones**, such as **MRT mPTX** and **Waldo**.
- **MyLaps RC4 Hybrid** (2-wire) and **RC4** (3-wire), via a short one-time [learning step](/decoder/docs/rc4).
- **Vostok** [reasonably priced transponders](https://www.vostokelectronics.com/shop/), including the one for go-karts.
- **RCHourGlass** [open-souce rc3 clone](https://github.com/mv4wd/RCHourglass) transponders.

Different transponder types can be mixed in the same race.

## See it in action

The decoder running on a Raspberry Pi with a HackRF One, reading transponders from the loop:

<div class="video-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/YDW0eA1Szk4"
    title="OpenStint RC lap timing on a real track"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"></iframe>
</div>

## Build the $65 system

Order the parts and lay the loop, then install the software and point your scoring program at it. The step-by-step guide walks you through all of it.

<div class="home-cta">
  <a class="cta-button brand" href="/decoder/docs/setup-simple-rtlsdr">Build the $65 system →</a>
  <a class="cta-button alt" href="https://www.rctech.net/forum/radio-electronics/1137693-openstint-laptiming-decoder.html">Ask on the forum</a>
</div>
