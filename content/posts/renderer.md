---
title: "OpenGL Renderer"
season: "Winter 2024 - Spring 2025"
draft: false
thumbnail: "thumbs/renderer.png"
video: "thumbs/rend_short.mp4"   # Optional
description: "An ECS-Based OpenGL Renderer with Shadow Mapping written in C++"
github: "https://github.com/jase-4/branch-renderer"
weight: 3
---

## Overview
I built a real-time 3D renderer from scratch using OpenGL and C++. The renderer supports dynamic lighting and shadow mapping, and uses an architecture that combines an Entity-Component-System (ECS) with interface-based polymorphism.

---

## Motivation
I was thinking about areas of computer science I hadn’t explored yet. Surprising even though I play video games, I hadn’t really explored graphics or game development that much. I decided to write a renderer from scratch in order to really understand the graphics pipeline. Along the way, I also developed a deeper understanding of linear algebra and how to structure complex systems.

---

## Technical Highlights
- **Blinn-Phong Lighting** – Implemented per-fragment lighting with diffuse, specular, and ambient components.  
- **Shadow Mapping** – Created depth-based shadow maps with adjustable bias to avoid artifacts.  
- **Entity-Component-System (ECS)** – Designed a lightweight ECS for flexible scene and object management.  
- **Shader Pipeline** – Wrote GLSL vertex and fragment shaders for materials, lighting, and depth passes.  

---

## Architecture

I ended up going with an **ECS system** mainly out of curiosity, though it also provides performance benefits by exploiting memory locality. I didn’t take a purist stance — sometimes I kept related items together in structs rather than splitting them into separate components, and I used interfaces where it made sense, such as for lights.

I also used **singletons** to make resource management easier. Graphics and game development often lend themselves well to a global singleton pattern. I did consider adding **thread pools** for some resource management tasks, like loading OBJ files or managing shaders, to further improve performance.

Overall, I’m very happy with how I designed the system. It allowed me to experiment with architecture decisions while keeping the renderer flexible and efficient.

### ECS and Systems
- Entities store data as components; systems operate on the data to drive behavior and rendering.  
- This separation keeps logic modular and allows adding new systems without changing existing ones.  

### Interfaces
- Common features, like lights, implement **shared interfaces**.  
- Example: all light types (directional, point, spot) conform to a `Light` interface, letting the lighting system handle them uniformly.  

### Singleton Subsystems
- Key managers (e.g., `ShaderManager`) are **singletons**: created once at startup and accessed globally.  
- Any system can register shaders or retrieve them without duplicating state, keeping resource management simple.  

### Modularity and Flexibility
- Renderer and other subsystems operate on ECS data through defined interfaces.  
- This structure allows swapping or extending systems with minimal changes to the core engine.


### Lighting System
- **Directional lights**: sunlight-style, global effect.  
- **Point lights**: omni-directional, limited radius.  
- **Spot lights**: cone-shaped, useful for focused beams.  
- Unified interface: each light type as a component, managed by the lighting system.  

### Shadow Mapping
- **Directional light shadows**: orthographic depth maps.  
- **Point light shadows**: cubemap depth maps.  
- **Spot light shadows**: perspective depth maps.  
- Challenges included biasing, resolution limits, and performance trade-offs.  

---

##  Demo

<video autoplay loop muted playsinline width="100%"  style="border-radius: 12px; overflow: hidden;">>
  <source src="/thumbs/renderer.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## Reflections

This project was a big learning experience. One of the initial challenges was wrapping my head around how graphics are done, especially at the scale they are used in real-time rendering. In graphics, there are many areas where you just have to try something, see how it works, and learn the tricks along the way. For instance, using cameras freely and thinking of pixels as data like in shadow mapping can be non-obvious if you haven’t done graphics before.

Learning shaders was also a lot of fun, though debugging them could be frustrating. Error messages are often vague, and sometimes things would just appear completely black, which was confusing at first. I know I still have a lot of work to do to become truly proficient with shaders.

When it came to architecting the systems, it was all about deciding what belongs where and keeping the system as simple as possible. At one point, I considered adding a base class for lights on top of the interface, but I decided against it to avoid over-complicating the system unnecessarily.

A project like this can go on forever, trying to improve or add features. Full game engines are massive, and throughout this project I found myself wondering whether I wanted to build a game or a game engine. There’s probably a happy middle ground, depending on the type of game you want to make.

---

## What's Next?

I actually built off of this project to create my **Drone Sim** project. In the future, I might add more features here, but I’m more likely to explore a game engine next and try making a small game. I might also experiment with **Vulkan** to deepen my graphics knowledge.

