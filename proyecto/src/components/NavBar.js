import React from 'react';
import Imagen from '../images/logo.png';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
<nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#" className='w-25'><img src={Imagen} alt="Logo de la tienda" className='w-50 mx-0 p-0'/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-center align-items-center mx-5" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Nuestros Combos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-disabled="true">Contacto</a>
                </li>
            </ul>
        </div>
            <div>
                <CartWidget/>
            </div>
    </div>
</nav>
  )
}

export default NavBar