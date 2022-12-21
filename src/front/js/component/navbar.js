import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  const [visualizar,setVisualizar] = useState(false)
  useEffect(() => {
    const tokenObj = localStorage.token;
    if (!tokenObj) {
      setVisualizar(true)
    }
  }, []);

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top container-fluid ">
      <div className="container d-flex justify-content-start col-9">
        <button
          className="navbar-toggler justify-content-start"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to={"/"}>
          <h2 className="navbar-brand ms-2 mt-2">PetShop Café</h2>
        </Link>
      </div>
      {/* Carrito */}
      <div className="d-flex justify-content-end">
        <li className="nav-item dropdown d-flex justify-content-end container">
          <a
            className="nav-link dropdown-toggle"
            id="iconoKart"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            hidden={visualizar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-cart3 user"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-item d-flex">
              <button type="button" className="btn btn-danger d-flex ms-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash3-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                </svg>
              </button>
            </li>
          </ul>
        </li>
      </div>
      {/* Corazon */}
      <div className="d-flex justify-content-end">
        <li className="nav-item dropdown d-flex justify-content-end container">
          <a
            id="iconoCorazon"
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            hidden={visualizar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-heart-fill user mt-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-item d-flex">
              <button type="button" className="btn btn-danger d-flex ms-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
              </button>
            </li>
          </ul>
        </li>
      </div>
      {/* Sesion */}
      <div className="d-flex justify-content-end">
        <li className="nav-item dropdown d-flex justify-content-end container">
          <a
            id="iconoSesion"
            className="nav-link dropdown-toggle "
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            hidden={visualizar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person-circle user"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
            <li>
              <a className="dropdown-item" href="#">
                Tú Cuenta
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Compras
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Lista Favoritos
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Mis Artículos
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Cerrar Sesión
              </a>
            </li>
          </ul>
        </li>
      </div>
      {/* Menu desplegable izquierdo */}
      <div
        className="offcanvas offcanvas-start bg-dark w-25"
        tabIndex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div className="offcanvas-header pb-0 ms-2">
          <h5
            className="offcanvas-title text-white fs-2"
            id="offcanvasDarkNavbarLabel"
          >
            Menú
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark pt-0 ms-2">
          <h5
            className="offcanvas-title text-white fs-4"
            id="offcanvasDarkNavbarLabel"
          >
            Categorías
          </h5>
          {/* Acordeon 1 */}
          <div className="accordion mt-2" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed fw-bold text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Ropas
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body container">
                  <a className="dropdown-item" href="#">
                    Abrigos Perros
                  </a>
                  <a className="dropdown-item" href="#">
                    Abrigos Gatos
                  </a>
                  <a className="dropdown-item" href="#">
                    Jerseys Perros
                  </a>
                  <a className="dropdown-item" href="#">
                    Jerseys Gatos
                  </a>
                  <a className="dropdown-item" href="#">
                    Sudaderas Perros
                  </a>
                  <a className="dropdown-item" href="#">
                    Sudaderas Gatos
                  </a>
                  <a className="dropdown-item" href="#">
                    Impermeables Perros
                  </a>
                  <a className="dropdown-item" href="#">
                    Impermeables Gatos
                  </a>
                  <a className="dropdown-item" href="#">
                    Camisetas Perros
                  </a>
                  <a className="dropdown-item" href="#">
                    Camisetas Gatos
                  </a>
                </div>
              </div>
            </div>
            {/* Acordeon 2 */}
            <div className="accordion-item mt-2">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed fw-bold text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Correas
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body container">
                  <a className="dropdown-item" href="#">
                    Correas de piel Perros
                  </a>
                  <a className="dropdown-item" href="#">
                    Correas de piel Gatos
                  </a>
                  <a className="dropdown-item" href="#">
                    Correas de Nylon Perros
                  </a>
                  <a className="dropdown-item" href="#">
                    Correas de Nylon Gatos
                  </a>
                  <a className="dropdown-item" href="#">
                    Correas extensibles Perros
                  </a>
                  <a className="dropdown-item" href="#">
                    Correas extensibles Gatos
                  </a>
                  <a className="dropdown-item" href="#">
                    Otras correas
                  </a>
                </div>
              </div>
            </div>
            {/* Acordeon 3 */}
            <div className="accordion-item mt-2">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed fw-bold text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Collares
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <a className="dropdown-item" href="#">
                    Collares de piel Perros
                  </a>
                  <a className="dropdown-item" href="#">
                    Collares de piel Gatos
                  </a>
                  <a className="dropdown-item" href="#">
                    Collares de Nylon Perros
                  </a>
                  <a className="dropdown-item" href="#">
                    Collares de Nylon Gatos
                  </a>
                  <a className="dropdown-item" href="#">
                    Chapas identificación
                  </a>
                  <a className="dropdown-item" href="#">
                    Bandanas y cuellos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
