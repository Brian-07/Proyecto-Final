import React, { Component } from "react";

const date = new Date();

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>

<div class="b-example-divider"></div>

<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Inicio</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Nosotros</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Preguntas frecuentes</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contáctanos</a></li>
    </ul>
    <p class="text-center text-muted">&copy; {date.getFullYear()} PetShop Café, Inc</p>
  </footer>
</div>

<div class="b-example-divider"></div>
		</p>
	</footer>
);
