import React from "react";
import { Link } from "react-router-dom";
import collares from "../../img/collares.png";
import accesorios from "../../img/accesorios.png";
import accPerro from "../../img/accperro.png";
import accGato from "../../img/accGato.png";
import "../../styles/home.css";
import config from "../config";

export const Home = () => {
  return (
    <div className="text-center mt-5 container">
      {/* Imagen collares de fondo */}
      <div className="imagenCollar">
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-bs-ride="true"
        >
          {/* Carousel */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          {/* Fondo del carousel */}
          <div className="carousel-inner ">
            <div className="carousel-item active fondoCarrusel mt-5 ">
              {/* Primera corredor del carousel */}
              <div className="d-flex">
                <div className="box1 text center">
                  <h2 className="display-4 fw-bold lh-1 tituloCard mt-2">
                    Compra<br></br>Vende
                  </h2>
                  <p className="fs-4 lh-1 text-warning">
                    Consigue todo lo que necesitas para tu mascota bebiendo café
                    y sin moverte de tu casa...
                  </p>
                  <p className="p1-2 text-info bg-black rounded-pill">
                    Ya tienes cuenta?{" "}
                    <Link
                      to="/Login"
                      className="text-primary text-white text-decoration-underline"
                    >
                      Logeate!
                    </Link>
                  </p>
                  <p className="mb-2 text-info bg-black rounded-pill">
                    No tienes cuenta?{" "}
                    <Link
                      to="/crear_cuenta"
                      className="text-primary text-white text-decoration-underline"
                    >
                      Creala!
                    </Link>
                  </p>
                </div>
                {/* Primera imagen del carousel */}
                <div>
                  <img
                    src={config.IMGURL + "/accesorios.png"}
                    className="d-block accesorios"
                  />
                </div>
              </div>
            </div>
            {/* Segundo corredor del carousel */}
            <div className="carousel-item fondoCarrusel mt-5">
              <div className="d-flex">
                <div className="box1 text center">
                  <h2 className="display-4 fw-bold tituloCard lh-1 mt-2">
                    Guauuu 20% Off!
                  </h2>
                  <p className="fs-4 lh-1 mt-4 text-warning">
                    Consigue lo que necesita tu perro con un descuento perfecto!
                  </p>
                </div>
                {/* Segunda imagen del carousel */}
                <div>
                  <img
                    src={config.IMGURL + "/accperro.png"}
                    className="d-block imagenAccPerro"
                  />
                </div>
              </div>
            </div>
            {/* Tercer corredor del carousel */}
            <div className="carousel-item fondoCarrusel mt-5">
              <div className="d-flex ">
                <div className="box1 text center">
                  <h2 className="display-4 fw-bold tituloCard lh-1 mt-2">
                    Miauuu 30% Off!
                  </h2>
                  <p className="fs-4 lh-1 mt-4 text-warning">
                    Consigue lo que necesita tu gato con este descuentazooo!
                  </p>
                </div>
                {/* Tercera imagen del carousel */}
                <div>
                  <img
                    src={config.IMGURL + "/accGato.png"}
                    className="d-block imagenAccGato"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Botones del carousel */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Imagenes del mundo,calidad y devoluciones */}
      </div>
      <div className="d-flex row mb-5 mt-3">
        <div className="col-3 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-globe-americas mundo"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
          </svg>
          <h3 className="mt-3">Envío a nivel mundial</h3>
        </div>
        <div className="col-6 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-bookmark-check-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
            />
          </svg>
          <h3 className="mt-3">Soporte de calidad</h3>
        </div>
        <div className="col-3 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-recycle"
            viewBox="0 0 16 16"
          >
            <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
          </svg>
          <h3 className="mt-3">Devoluciones y Cambio</h3>
        </div>
      </div>
    </div>
  );
};
