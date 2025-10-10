---
title: "Embedded Distributed Sensor Network"
date: 2025-07-01
draft: false
thumbnail: "thumbs/embed2.png"
video: "thumbs/embed3.mp4" 
description: "Distributed CAN bus network using Rust (Embassy) on ESP32 nodes and C++ (FreeRTOS) on STM32"
weight: 2
---


## Overview
I built an embedded system that fuses accelerometer and gyroscope data from an **MPU-6050** on an **ESP32** using **Rust** and **Embassy**. The fused data is then sent over **CAN bus** to an **STM32** running **FreeRTOS**, where a simple sensor fusion algorithm processes it further. The STM32 then transmits the processed data over CAN bus again to another ESP32 (also running Rust and Embassy), which sends it over **Wi-Fi** to a **Python server** for real-time display.

This setup gave me a working distributed embedded system — multiple microcontrollers communicating over CAN and Wi-Fi, sharing real sensor data in real time.

## Motivation
This project started after watching some YouTube videos where people built cool projects with screens, actuators, and 3D-printed parts. I realized there was nothing stopping me from doing the same. Around that time, I was also working on my **drone simulator**, and I started thinking about what it would take to build my own real drone someday.  

I wanted a project that interacted with the real world — not just something that lived entirely on my computer. That’s when I decided to work with an **STM32 dev board** and integrate it with other embedded hardware.  

Even though I studied **Computer Science**, I’d already had some exposure to low-level systems — working with **Raspberry Pi**, **ARM assembly**, and **computer architecture** classes. This project felt like the perfect way to combine all that knowledge into one system.  

My main goal was to get something working end-to-end while learning as much as I could about embedded systems in a broad sense. I see this project as a **foundation** — something that sets me up to take on more advanced embedded and robotics projects in the future.

## System Overview
- Diagram of nodes + connections:
  - **ESP32 Sensor Node (Rust/Embassy):** gathers raw sensor data.
  - **STM32 Fusion Node (C++/FreeRTOS):** performs sensor fusion.
  - **ESP32 Wi-Fi Node (Rust/Embassy):** sends fused data over UDP/Wi-Fi.
  - **Server:** receives data and displays it.
- CAN bus as the backbone for inter-node communication.

## Node Breakdown
### ESP32 Sensor Node
- Runs Rust with Embassy async runtime.
- Interfaces with sensors (list which ones).
- Publishes data onto CAN bus.

### STM32 Fusion Node
- Runs FreeRTOS in C++.
- Receives sensor packets from CAN.
- Performs sensor fusion (filters, transformations).
- Sends fused data onward to Wi-Fi node.

### ESP32 Wi-Fi Node
- Rust + Embassy again.
- Bridges CAN data to UDP packets.
- Transmits data to remote server.

### Server
- Collects and displays sensor data.
- Could be extended for logging, visualization, or control.

<video autoplay loop muted playsinline width="100%" style="border-radius: 12px; overflow: hidden;">
  <source src="/thumbs/embed.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Reflections
I really enjoyed learning more about embedded systems throughout this project. I do wish it had been a bit more interactive, but it served as a great starting point for future ones. Most of the challenges came from getting familiar with how things are done differently compared to traditional software development — especially how much closer you have to think to the hardware.  

There was just a lot to absorb overall: understanding timing, electrical concepts, and constantly asking *why* things worked the way they did. The biggest area I need to improve is timing — specifically, how to manage timing across systems and what’s considered acceptable for different tasks. For this project, it wasn’t critical, but I did run into issues like publishing CAN bus messages too quickly, which caused overruns, or fusion problems when certain data streams lagged behind due to overly long delays.

I’m actually very happy with the structure of this project. For example:
- I factored out shared CAN bus logic into a separate **crate** so both Rust nodes could reuse it.  
- I pulled out logic that worked in both Rust and C++ into libraries that could be **unit tested** independently.  
- I designed the serialization methods to be shared and testable outside the hardware environment.  

One idea I didn’t get around to implementing was an **end-to-end test pipeline** — sending a test command from the Python server to the Wi-Fi node that triggers a known sensor value through the entire network. That would’ve been a nice way to validate the full data path.  

I also planned to add another sensor for temperature and pressure, but getting reliable readings turned out to be much more involved, and most of the Rust crates I tried weren’t functioning correctly. At that point, I decided it was better to move on. This project could’ve easily kept growing into a jumble of random sensors and screens, so I’m glad I wrapped it up when I did — it’s a strong foundation to build on.

## What’s Next
Definitely more embedded projects — but not direct extensions of this one. I want to start experimenting with **motors and actuators**, and I also have an **FPGA** and a **K210 AI dev board** that I’d like to use for computer vision experiments. Eventually, I’d like to move into **PCB design** as well.  

I’m still very much in the “idea phase” for my next few builds, but a **3D printer** would open up a lot of new possibilities. Once I have one, I’ll probably revisit the actuator and robotics side more seriously — being able to make my own parts would make those projects way more interesting.
