---
title: "Cuda Boid Sim"
season: "Spring - Summer 2025"
draft: false
thumbnail: "thumbs/cuda_boid.png"
video: "thumbs/boid_short.mp4"   # Optional
description: "Accelerating Boid Simulations with CUDA and C++, Rendered with OpenGL"
github: "https://github.com/jase-4/boid-sim"
---



## Overview
I built a real-time Boid flocking simulation accelerated with CUDA. The system simulates thousands of agents moving according to flocking rules (separation, alignment, cohesion) and renders them in real time using instanced OpenGL.

---

## Motivation
I wanted to explore GPU computing and parallelization in practice, so I chose CUDA since I'm running on an NVIDIA GPU (and, well, they don't exactly give you much of a choice). The Boid algorithm is simple at its core, but once you add hundreds of agents that all need to be rendered, performance becomes a real challenge. I also liked the way other boid projects looked, except most of the ones I saw were in 2D and not 3D, so I made it 3D.

Because of how straightforward the algorithm was, state between each CUDA run was minimal, making it a great candidate for showcasing performance scaling with CUDA.

---

## Technical Highlights

- **CUDA Parallelization** – Offloaded flocking rule computations to thousands of GPU threads for massive speedups over the CPU version.  
- **CPU Baseline** – Implemented a single-threaded CPU version for direct performance comparison.  
- **Instanced Rendering** – Used OpenGL instanced rendering to efficiently draw thousands of Boids in real time.  
- **Performance Benchmarking** – Measured simulation scaling with population size, optimizing memory layouts (Structure of Arrays) for coalesced GPU access.

---

## Performance Results

The CUDA implementation achieved dramatic performance improvements over the single-threaded CPU baseline. **To ensure a valid performance comparison, the same set of Boid simulation parameters (like protected range, visual range, speed, etc.) was used for both the CUDA and CPU versions.** *(Note: These specific parameter values were primarily tuned to produce the most visually appealing and dynamic flocking behavior on the high-speed CUDA implementation.)*

- **At 60 FPS:** 16,000 boids (CUDA) vs 450 boids (CPU) — **35.6× improvement**
- **At 45 FPS:** 20,000 boids (CUDA) vs 600 boids (CPU) — **33.3× improvement** - **At 30 FPS:** 28,000 boids (CUDA) vs 700 boids (CPU) — **40× improvement**

The CUDA version consistently maintained 35-40× higher agent counts at equivalent frame rates, demonstrating the massive parallelization benefits for embarrassingly parallel workloads.

---

## Demos

### GPU
20,000 boids
<video autoplay loop muted playsinline width="100%" style="border-radius: 12px; overflow: hidden;">
  <source src="/thumbs/cuda_sim.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### CPU
600 boids
<video autoplay loop muted playsinline width="100%" style="border-radius: 12px; overflow: hidden;">
  <source src="/thumbs/cpu_boid.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## Reflection

This project was one of my shorter ones, and while I'm happy with the results, I'm not entirely satisfied with the architecture. Switching between the GPU and CPU versions feels awkward and hacky. That happened because I started with the CPU version and tried to follow the paper's implementation as closely as I could. I also tied the random initialization of each Boid to a class that ended up being required everywhere. I probably could've refactored that out, but it would've been a lot of work for something that already works and that I don't plan to revisit.

The CUDA version's logic is mostly the same, just parallelized. The main issue I ran into was with the CUDA compiler — it didn't like me using a simple wrapper class for 3D vectors even though it had no polymorphic behavior. I also had to enable a setting `set_target_properties(boid_sim PROPERTIES CUDA_SEPARABLE_COMPILATION ON)` that allowed linking across multiple CUDA files. I'm guessing most people just use one large CUDA file, but I structured the project like I would a typical C++ codebase.

Visually, I'm really happy with how it turned out. Watching the Boids interact almost feels like a lava lamp with the setup I have. I definitely learned a lot about GPU programming and parallelization throughout this project. That said, I probably wouldn't use CUDA again unless I was being paid to — it's powerful, but not the most enjoyable tool to work with.  

There's still plenty of room for optimization: using tetrahedrons instead of cubes, improving loading and initialization (though it only runs once), and maybe adding lighting. It could also be cool to have each Boid rotate in the direction of its velocity. Overall, I'm happy with the visuals and ready to move on to something new.

---

## What's Next?

For CUDA itself — probably nothing. I don't plan to continue this project. But for GPU programming in general, definitely. Graphics programming is already a kind of GPU work, but for compute tasks, I'd like to try out **OpenCL** next, especially for cross-vendor compatibility in gaming scenarios where I wouldn't want to write both CUDA and whatever AMD uses.

---

## References

<a href="https://vanhunteradams.com/Pico/Animal_Movement/Boids-alg" class="custom-link">Boids Algorithm Reference</a>
