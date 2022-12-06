import React from "react";
import { Link } from "react-router-dom";
import "/workspace/Proyecto-Final/src/front/styles/navbar.css"

export const Navbar = () => {
	return (
		<div className="container pb-4">
			<nav class="navbar navbar-dark bg-dark fixed-top">
  <div className="container d-flex justify-content-start ">
    <button className="navbar-toggler justify-content-start" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
	<Link to={"/home/"}>
	<h2 className="navbar-brand ms-2">PetShop Café</h2>
	</Link>
	</div>
    <div className="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú</h5>
        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
</svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
		<i class="fa-regular fa-house-user"></i>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
		<i class="fa-regular fa-house-user"></i>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
		<i class="fa-regular fa-house-user"></i>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
		<i class="fa-regular fa-house-user"></i>
          Customers
        </a>
      </li>
    </ul>
	</div>
  </div>
</nav>
		</div>

		
	);
};
