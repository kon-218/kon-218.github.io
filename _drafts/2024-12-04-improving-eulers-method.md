---
layout: page
sidebar: right
sidebar_content: "_sidebar_wine.html"
subheadline: Numerical Methods
title:  "Euler's method"
teaser: "Solving differential equations with numerical methods"
breadcrumb: true
tags:
    - Data Science
    - Wine
    - Bayesian inference
    - Machine Learning
    - Data visualization
    - Python
    - Wine Classification
    - Regression
categories:
    - blog
image:
    thumb: wine.png
    title: wine.png
    caption: Can we guess the wine?
permalink: /blog/eulers-method
header: no
---

## Exploring Numerical Methods for Simulating Chemical Phenomena

This blog post explores the application of Euler's method and the Improved Euler's method for simulating a damped, driven oscillation, a common model in scientific research. These methods offer a numerical approach to approximating solutions for differential equations, which are fundamental to describing many chemical processes.

### Euler's Method: A First Look at Numerical Integration

Euler's method is a first-order numerical procedure used for solving ordinary differential equations (ODEs). It utilises the initial value of the solution and the differential equation to approximate the solution at a later time. The method iteratively calculates the next point on the solution curve based on the slope at the current point. 

Imagine traversing a curve. At each step, you look at the direction you are heading (the slope) and take a small stride in that direction. This stride is the "step size" (*h*). The smaller the stride, the closer you stay to the actual curve. However, taking many small strides can be computationally expensive.

#### Illustrating Euler's Method with a Damped, Driven Oscillation

**The Scenario:**  A weight attached to a spring, experiencing friction and being pushed back and forth periodically, is a classic example of a damped, driven oscillation. This system's motion can be described by a second-order differential equation, which can be broken down into two first-order equations, one for position (*x*) and one for velocity (*v*).

**Applying Euler's Method:** Using Python code, we can simulate this oscillation. The code calculates the change in position and velocity over small time steps based on the current values and the equations of motion. 

```python
# Defining the damped oscillation function
def damped_oscillation(f,t):
    # ... (Constants and equations defining the system)
    return dxdt, dvdt 

# Iterating through time steps 
for i in range(n):
    # ... (Calculate and store new position, velocity, and time)
```

**Visualising the Results:**  Plotting the results (position and velocity over time) reveals the behaviour of the oscillator. This plot would show how the oscillator's motion evolves due to the interplay of the spring force, damping, and the driving force.

**Image Placeholder:** [Image of graph showing position and velocity vs time for Euler's method]

### Improved Euler's Method (Heun's Method): Enhancing Accuracy

The Improved Euler's method, or Heun's method, refines the approximation by considering the average slope over the time step. This method is second-order, meaning it converges on the solution more quickly than Euler's method.

Instead of just using the slope at the beginning of the step, this method takes a "preview" step using Euler's method to estimate the slope at the end of the step. It then averages the slopes at the beginning and the end to get a more accurate direction for the "real" step.

#### Improved Euler's Method in Action

Using the same damped, driven oscillation example, the code for the Improved Euler's method would look like this:

```python
# Iterating through time steps 
for i in range(n):
    k1 = damped_oscillation((x_now, v_now), t_now) 
    k2 = damped_oscillation(((x_now + k1*h), (v_now + k1*h)), t_now + h) 

    # ... (Calculate and store new position, velocity, and time using k1 and k2)
```

**Visualising the Results:**  Plotting the results for the Improved Euler's method would show a closer match to the true solution of the differential equation compared to the Euler's method plot.

**Image Placeholder:** [Image of graph showing position and velocity vs time for Improved Euler's method]

### Efficiency and Convergence: Comparing the Methods

A key takeaway from these simulations is the improved efficiency of the Improved Euler's method. It achieves a comparable level of accuracy with fewer steps, reducing the computational cost. This efficiency is crucial, especially when dealing with complex systems and long simulation times.

### Beyond Oscillations: Applications in Chemistry

While this post focuses on a mechanical example, the principles of Euler's method and the Improved Euler's method extend to numerous applications in chemistry. Here are some examples:

* **Molecular Vibrations:** Simulating the vibrational motions of molecules.
* **Chemical Kinetics:** Modelling the evolution of reactant and product concentrations over time.
* **Molecular Dynamics:** Studying the interactions and movements of atoms within molecules.

These numerical methods provide powerful tools for understanding and predicting chemical behaviour, bridging the gap between theoretical equations and observable phenomena. The choice between Euler's method and the Improved Euler's method often depends on the desired level of accuracy and computational resources available. 

***Please note that the applications of these numerical methods to specific chemical phenomena are based on general knowledge and not explicitly discussed in the sources provided. You may want to independently verify this information.***
