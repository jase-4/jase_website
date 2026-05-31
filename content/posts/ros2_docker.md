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
A benchmarking framework for autonomous navigation using ROS2, Nav2, SLAM, and Gazebo. The goal was reproducibility — running one-off navigation trials tells you nothing useful, so I containerized the whole setup and automated 4 parallel trials with Docker Compose to get consistent, comparable results.

---

## Results
TEST RESULTS SUMMARY
Total tests:              4
Successful:               3
Failed:                   1
Success rate:             75.0%
Average completion time:  46.24s
Average distance:         9.78m
Average path efficiency:  89.66%

---

## Reflection
This one is less flashy than my other projects but the methodology was the point. Anyone can get a robot to navigate once — getting repeatable numbers across consistent conditions is a different problem. That said, I'd like to extend it to test different Nav2 configurations against each other, which is what a framework like this is actually useful for.

---

## References

<a href="https://docs.ros.org" class="custom-link">ROS2 Documentation</a>
<a href="https://nav2.org" class="custom-link">Nav2 Documentation</a>
<a href="https://clearpathrobotics.com" class="custom-link">Clearpath Robotics</a>