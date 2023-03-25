# Lorenz attractor

<div align="start">
  <div style="display: flex;">
    <p>
        The Lorenz attractor is a system described by a set of odinary differential equations (ODEs), with three variables (x, y, z) and three control parameters (σ, ρ, β). 
        <br/> 
        <br/>
        dx/dt = σ(y - x) 
        <br/>
        dy/dt = x(ρ - z) - y 
        <br/>
        dz/dt = xy - βz
        <br/> 
        <br/>
        It is worth mentioning that to code the representation, it is not necessary to solve the system. Instead, at each time step, the displacement of the variables is calculated and their values updated.
    </p>
    <div style="width: 40px;"></div>
    <img src="./assets/full_shape.gif" width="42%" height="42%"/>
  </div>
</div>

<br/>

<div align="start">
  <div style="display: flex;">
    <p>
        As an ODE, the Lorenz attractor requires an initial set of variables to determine its trajectory. This initial condition represents the state of the system at a specific moment in time. 
        <br/> 
        <br/>
        The system exhibits sensitive dependence on initial conditions. This means that small changes in the initial conditions can lead to large differences in the long-term behavior of the system.
    </p>
    <div style="width: 40px;"></div>
    <img src="./assets/comparison.gif" width="42%" height="42%"/>
  </div>
</div>

<br/>

<div align="start">
  <div style="display: flex;">
    <p>
        It is also really fun to play with for making interesting trajectories in animations 😀
    </p>
    <div style="width: 40px;"></div>
    <img src="./assets/pair.gif" width="42%" height="42%"/>
  </div>
</div>

---

🚂 Inspired by this amazing tutorial https://www.youtube.com/watch?v=f0lkz2gSsIk