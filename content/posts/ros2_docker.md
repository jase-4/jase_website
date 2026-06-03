---
title: "ROS2 Navigation Benchmark"
season: "Fall - Winter 2025"
draft: false
thumbnail: "thumbs/gazebo.png"
video: "thumbs/ros2.mp4" 
description: "Benchmarking Autonomous Navigation with ROS2, Nav2, and Docker"
github: "https://github.com/jase-4/Docker-ROS2-Benchmarking-Framework"
weight: 5
---

## Overview

I built a benchmarking framework for autonomous navigation using ROS2, Nav2, SLAM, and Gazebo, with a focus on reproducibility. To accomplish this, I used Docker to containerize the entire simulation stack, allowing me to run four navigation trials in parallel under consistent conditions.

<img src="/thumbs/gazebo.png" alt="System Architecture Diagram" style="width: 70%; border-radius: 12px; margin: 1.0rem 0;">
---

## Technical Highlights

- **Reproducible benchmarking system** for ROS2, Nav2, and Gazebo-based autonomous navigation  
- **Fully containerized simulation stack using Docker**, ensuring consistent and repeatable experimental environments  
- **Parallel execution of 4 navigation trials**, improving testing throughput and reducing runtime  
- **Automated metric collection pipeline**, capturing completion time, path length, and trajectory efficiency  

---

## Results
 **TEST RESULTS SUMMARY**
* Total tests:              4
* Successful:               3
* Failed:                   1
* Success rate:             75.0%
* Average completion time:  46.24s
* Average distance:         9.78m
* Average path efficiency:  89.66%

---
## Demo

### 2.5x speed
<video autoplay loop muted playsinline width="100%"  style="border-radius: 12px; overflow: hidden;">>
  <source src="/thumbs/ros2_sped.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## Reflection

This project wasn't as visually flashy as some of my others, but it gave me a lot of practical experience working in an unfamiliar ecosystem.

Most of the early frustration was just getting ROS2 and Gazebo running in the first place. I was on Linux Mint, and getting my Nvidia drivers to cooperate with Docker took longer than I'd like to admit. Once the stack was actually running, the bigger headache was namespacing since I was using the Clearpath rover, I had to make sure every topic and node in the system knew the correct namespace, and tracking down where things were mismatched took a while. This is definitely where my lack of ROS2 experience showed the most. I also had to throttle the lidar publish rate because it was overwhelming the system and causing everything else to fall apart.

I do wish I had found this sooner, it would have paired really nicely with my drone sim project instead of having to build my own communication systems for passing messages between sensors and commands.

---

<img src="/thumbs/rviz.png" alt="System Architecture Diagram" style="width: 80%; border-radius: 12px; margin: 1.0rem 0;">

---

## References

<a href="https://docs.ros.org" class="custom-link">ROS2 Documentation</a>
<a href="https://nav2.org" class="custom-link">Nav2 Documentation</a>
<a href="https://clearpathrobotics.com" class="custom-link">Clearpath Robotics</a>