---
title: "4-DOF Robotic Arm"
season: "Spring 2026"
draft: false
thumbnail: "thumbs/robot2.jpeg"
video: "thumbs/robot.mp4"
description: "Designing and Building a 4-DOF Robotic Arm with STM32 Firmware and Custom PCB"
github: "https://github.com/jase-4/[your-repo]"
weight: 1
---

## Overview
I designed and built a physical 4-DOF robotic arm from scratch — CAD in Fusion 360, 3D printed parts, custom power distribution PCB, STM32 firmware in C, and a Python host interface communicating over UART.

---

## Motivation
After my sensor fusion project I wanted to stop just reading the real world and actually move something in it. Getting a 3D printer made that suddenly viable — I could design and iterate on parts myself instead of being limited to whatever I could buy.

---

## Technical Highlights

- **STM32 Firmware** – Real-time PWM servo control with a 10 ms velocity-limited control loop.
- **Custom PCB** – Consolidated power distribution to improve servo stability and reduce wiring complexity.
- **Python Host Interface** – UART state machine for scripted autonomous pose and gripper control.
- **CAD & Fabrication** – Designed all parts in Fusion 360 and 3D printed them.

---

## Demos

[your demo video here]

---

## Reflection

[This is the most important section — what carried over from previous projects, what surprised you about physical builds vs pure software, what's still in progress]

---

## What's Next?

Building my own drone from scratch.