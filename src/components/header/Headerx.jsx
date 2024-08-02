import React from 'react'
import '../header/Headerx.css'

const Headerx = () => {

  const numerowsp = '56966601158';

  return (
   <>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand Titlerosa" href="#">Doña Rosa</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Productos">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={`https://wa.me/${numerowsp}`}>Contacto</a>
        </li>      
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default Headerx