---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: "OpenStint: DIY RC Lap Timing Decoder (RTL-SDR / HackRF)"
titleTemplate: false
description: "Open-source DIY RC lap timing system that reads near-field AMB/RC3/RC4 and OpenStint transponders using an inexpensive RTL-SDR or HackRF radio."

hero:
  name: "OpenStint"
  text: "HackRF & RTL-SDR Powered RC Lap Timing Decoder"
  tagline: "OpenStint is an open-source project reading near-field transponders using inexpensive software-defined radios (SDR)."
  image:
    src: /openstint-decoder.png
    alt: Simple setup with Raspbery Pi Model 3 B+
  actions:
    - theme: brand
      text: Introduction
      link: /decoder/docs/introduction
    - theme: alt
      text: Windows downloads
      link: https://github.com/zsellera/openstint/releases
    - theme: alt
      text: OpenStint Transponders
      link: https://github.com/zsellera/openstint-transponder

features:
  - icon: 🎉
    title: Multi-protocol support
    details: Natively decodes the OpenStint transponder, plus RC3, RC4Hybrid, RC3-clones (MRT, Waldo) and Vostok transponders.
  - icon: 🔧
    title: Off-the-shelf hardware
    details: No soldering or electronics skills required — works with HackRF One and RTL-SDR v3 & v4.
  - icon: 🏁
    title: Supports multiple timing software
    details: Tested with LapBeeps, RCGTiming and ZRound.
  - icon: 📉
    title: Runs on modest hardware
    details: Low resource requirements — runs even on a Raspberry Pi 3 Model B+.
  - icon: 🎓
    title: RC4 with learning
    details: Supports 3-wire RC4 transponders, including a learning feature to register them.
  - icon: ⏱️
    title: Precise passing detection
    details: Accurate passing-time detection based on signal strength.
  - icon: 🚗
    title: Passing speed detection
    details: Estimates the vehicle's passing speed from signal strength.
  - icon: 🧠
    title: Adaptive filtering
    details: Adaptive filters enhance reception quality.
---

