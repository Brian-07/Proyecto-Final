import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import Login from "./pages/login.jsx";
import MisArticulos from "./pages/misArticulos.jsx";
import ListaDeProductos from "./pages/lista_de_productos.jsx";
import PantallaDeProductos from "./pages/pantalla_de_productos.jsx";
import PrevisualizacionArticulo from "./pages/previsualización_articulo.jsx";
import Favoritos from "./pages/favoritos.jsx";
import CreateAccount from "./pages/crearCuenta.jsx";
import { Single } from "./pages/single";
import { Nosotros } from "./pages/nosotros";
import { FAQ } from "./pages/fAQ";
import { ContactaNosotros } from "./pages/contactaNosotros";
import { DatosPersonales } from "./pages/datosPersonales";
import { PagUsuario } from "./pages/paginaUsuario";
import { PagVendedor } from "./pages/paginaVendedor";
import { PagEdicionArticulo } from "./pages/paginaEdicionArticulos";
import { Carrito } from "./pages/carrito";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";






//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Login />} path="/login" />
            <Route element={<CreateAccount />} path="/crear_cuenta" />
            <Route element={<MisArticulos />} path="/mis_articulos" />
            <Route element={<ListaDeProductos />} path="/lista_de_productos" />
            <Route element={<PantallaDeProductos />} path="/pantalla_de_productos" />
            <Route element={<PrevisualizacionArticulo />} path="/previsualizacion_articulo" />
            <Route element={<Favoritos />} path="/favoritos" />
            <Route element={<Nosotros />} path="/nosotros" />
            <Route element={<FAQ />} path="/FAQ" />
            <Route element={<ContactaNosotros />} path="/contacta_nosotros" />
            <Route element={<DatosPersonales />} path="/datos_personales" />
            <Route element={<PagUsuario />} path="/pag_usuario" />
            <Route element={<PagVendedor />} path="/pag_vendedor" />
            <Route element={<PagEdicionArticulo />} path="/pag_editar_articulo" />
            <Route element={<Carrito />} path="/carrito" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
