import React from "react";

export const PagUsuario = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-start mt-5">
        <h1 className="mt-5 display-2 titulo-login ms-5">Bienvenido</h1>
      </div>
      <div className="card bg-light mb-5 rounded-3 border-primary col-11 ms-5">
        <div className="ms-5 row col-12 d-flex mb-3">
          {/* Carta de Cuenta */}
          <div className="card text-bg-light ms-5 col-7 mt-5">
            <div className="card-header">Cuenta</div>
            <div className="card-body">
              <a href="/mis_articulos" className="nav-link px-2 text-muted">
                Mis artículos en Venta
              </a>
              <a href="/datos_personales" className="nav-link px-2 text-muted">
                Datos Personales
              </a>
            </div>
          </div>
          {/* Carta usuario */}
          <div className="col-3 mt-5 ms-1 text-center">
            <div className="card bg-warning">
              <h1 className="mt-1">Usuario</h1>
              {/* Imagen usuario */}
              <div className="ms-2">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="90"
                    fill="currentColor"
                    className="bi bi-person-circle user text-dark"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Carta de Pedidos */}
          <div className="card text-bg-light mb-3 ms-5 mt-4 col-7 d-flex">
            <div className="card-header">Pedidos</div>
            <div className="card-body">
              <a href="/carrito" className="nav-link px-2 text-muted">
                Compras
              </a>
              <a href="/favoritos" className="nav-link px-2 text-muted">
                Lista de Favoritos
              </a>
            </div>
          </div>
          {/* Botones */}
          <div className="col-4 mt-5">
            <button className="btn btn-primary mt-5 p-2" type="submit">
              Guardar Cambios
            </button>
            <button className="btn btn-danger mt-5 ms-3 p-2" type="submit">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
