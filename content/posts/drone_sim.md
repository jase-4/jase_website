---
title: "Drone Sim"
season: "Spring - Summer 2025"
draft: false
thumbnail: "thumbs/drone_sim.png"
video: "thumbs/drone_short.mp4" 
description: "Drone simulation in C++ with Bullet physics and OpenGL rendering, integrating Ada/Python flight control and simulated sensor data."
github: "https://github.com/jase-4/drone-sim"
weight: 1
---


## Overview

I built a real-time drone simulator that brings together physics, graphics, and networking. The simulator uses Bullet Physics, OpenGL, Boost.Asio, and C++ to model realistic drone dynamic. A virtual flight controller, written in Python for rapid prototyping and Ada for reliability, that connects via UDP to command the drone. The system also emulates onboard sensors, making it possible to test control logic in a realistic environment.

## Motivation
I wanted to know more about drones and physics simulation as a whole. Every so often I get a urge to explore physics and since I had just built my own renderer, it felt like the perfect opportunity to turn it into a custom drone sim. This project also gave me a deeper understanding of how to structure systems and how the visual and backend sides of simulations interact.

## Technical Highlights 
-	Drone Dynamics & Collisions – Simulated realistic rigid-body physics using Bullet.
-	OpenGL Visualization – Rendered the drone and environment in real time.
-	Ada Flight Controller – Wrote a virtual flight controller in Ada, communicating over UDP sockets.
- Sensor Emulation – Implemented IMU, GPS and others using Boost.Asio for asynchronous networking.
-	Unified Pipeline – Designed the simulator so that physics, sensors, and control logic run together as a cohesive system.

<video autoplay loop muted playsinline width="100%" style="border-radius: 12px; overflow: hidden;">
  <source src="/thumbs/drone_py.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<video autoplay loop muted playsinline width="100%" style="border-radius: 12px; overflow: hidden;">
  <source src="/thumbs/drone_ada.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Reflection

This is probably my favorite project I’ve done so far. I really enjoyed learning more about **physics and drones**. Speaking of physics, I actually tried to write my own **physics engine** at first. Unfortunately, that didn’t work out — I couldn’t get rotational collisions to behave correctly, and objects kept sinking into the floor. Honestly though, switching to **Bullet Physics** was probably for the best. Once I made the switch, everything came together quickly, and the time I spent trying to build my own engine helped me understand Bullet much better.

I used **Boost.Asio** for sensor emulation to simulate how a real drone operates. I chose it because it’s deterministic — similar to how **FreeRTOS** schedules tasks — which made the simulation more reproducible than using regular threads. Later, when I worked on my embedded project using FreeRTOS, I realized how similar the design concepts were.

I decided to write the **flight controller and PID system** separately because I wanted to experiment with the **Ada programming language**. I’d read that it was originally developed by the U.S. Department of Defense and wanted to see how its safety model compared to Rust’s. Ada turned out to be a very verbose language — definitely challenging to read at first since it’s so different from C-style syntax. It reminded me of learning a new spoken language during those first few confusing weeks. It has its ups and downs, but the biggest downside is the ecosystem and documentation, likely due to its proprietary history.

As for challenges, most of them were around **organization and stability**. Getting the PID controller to work required a lot of tuning. The biggest issue I found was instability in the simulation itself — getting the error approximations right and adjusting the physics timestep took time. I also wanted to go further with the **sensors** by adding sensor fusion and extra components like a range finder, but at some point, I had to ask: *have I learned what I wanted to from this project?*  

I’d say yes — I came away with a solid understanding of the underlying systems behind drones, simulations, and control loops.


## What's Next?

As I mentioned, this project is something I could keep expanding forever. That said, I think I’d have a better time exploring new ideas using a **pre-built simulator** rather than starting from scratch again.  

More likely, I’ll experiment with **Unreal Engine 5**, possibly using a flight simulator plugin and **ROS** to explore concepts like drone swarms or computer vision applications and turning that into another project. Eventually, I’d love to build my **own physical drone**, but that will probably require a 3D printer so I can create custom parts. My plan would be to handle everything for it — including designing a **custom PCB** — which I think would be incredibly fun and rewarding.


