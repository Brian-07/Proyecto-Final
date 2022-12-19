import React from "react";
import "../../styles/carrito.css";

export const Carrito = () => {
  return (
    <div className="container mb-5">
      {/* Titulo */}
      <div className="d-flex justify-content-start mt-5 col-lg-5">
        <h1 className="mt-5 display-3 titulo-login ">Compralo!</h1>
        <div className="col-4 mt-5 align-items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60px"
            height="60px"
            fill="currentColor"
            className="bi bi-cart4 kartMove"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
        </div>
      </div>
      <div className=" d-flex mb-1">
        {/* Carta de artículos */}
        <div className="col-lg-7">
          <div className="card bg-light rounded-3 border-primary p-2">
            <h4 className="ms-2 mt-1 fw-bold">Artículos</h4>
            <hr className="col-11 ms-2 mt-1 border border-primary border-2"></hr>
            <p className="ms-2 fw-semibold">No hay artículos en el carrito.</p>
            {/* Boton Seguir comprando */}
            <div className="ms-2 col-4 mb-2">
              <button className="btn-lg btn-primary mt-2 p-1" type="submit">
                Seguir Comprando
              </button>
            </div>
          </div>
        </div>
        {/* Carta de precios */}
        <div className="col-lg-5 ms-2">
          <div className="card bg-light rounded-3 border-primary p-2">
            <table className="table m-1">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Articulo</th>
                  <th scope="col">Vendedor</th>
                  <th scope="col">Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Correa Perro</td>
                  <td>Juan</td>
                  <td>10,00€</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Chubasquero</td>
                  <td>Pepe</td>
                  <td>25,00€</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Chubasquero</td>
                  <td>Pepe</td>
                  <td>25,00€</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Chubasquero</td>
                  <td>Pepe</td>
                  <td>25,00€</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Chubasquero</td>
                  <td>Pepe</td>
                  <td>25,00€</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Chubasquero</td>
                  <td>Pepe</td>
                  <td>25,00€</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td colSpan="2">Total</td>
                  <td>135,00€</td>
                </tr>
              </tbody>
            </table>
            {/* Boton Seguir comprando */}
            <div className="ms-5 col-9 mb-2 text-center">
              <button className="btn-lg btn-primary mt-2 p-1" type="submit">
                Tramitar pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
