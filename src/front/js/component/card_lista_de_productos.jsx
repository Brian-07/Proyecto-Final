import React from 'react';
import "/workspace/Proyecto-Final/src/front/styles/lista_de_productos.css"
import { Link } from 'react-router-dom';

function CardListaDeProductos(){
    return(
        <div className='container d-flex justify-content-center mt-5'>
            <div className="row row-cols-md-1 row-cols-md-4 g-4">
        <div className="col">
            <div className="card h-100">
            <img src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><a className="text-1 text-list" href="#">Nombre Producto</a></h5>
                <p className="card-text">Descripción</p>
                <p className="card-text">Precio €</p>
                <p className="card-text">seudónimo vendedor</p>
            </div>
            <div className="card-footer bg-card">
            {/* Botón carrito */}
            <Link
            to="/carrito"
            aria-expanded="false"
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
          </Link>
          {/* Botón favoritos */}
          <Link
            className='ms-2'
            to="/favoritos"
            aria-expanded="false"
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
          </Link>

            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <img src="https://i.picsum.photos/id/598/200/200.jpg?hmac=CGTNWD3Wfl8FFUMGok-Kj_SsE7Yc80U-jxup04hpB5k" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><a className="text-1 text-list" href="#">Nombre Producto</a></h5>
                <p className="card-text">Descripción</p>
                <p className="card-text">Precio €</p>
                <p className="card-text">seudónimo vendedor</p>
            </div>
            <div className="card-footer bg-card">
                {/* Botón carrito */}
            <Link
            to="/carrito"
            aria-expanded="false"
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
          </Link>
          {/* Botón favoritos */}
          <Link
            className='ms-2'
            to="/favoritos"
            aria-expanded="false"
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
          </Link>

            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <img src="https://i.picsum.photos/id/598/200/200.jpg?hmac=CGTNWD3Wfl8FFUMGok-Kj_SsE7Yc80U-jxup04hpB5k" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><a classNameName="text-1 text-list" href="#">Nombre Producto</a></h5>
                <p className="card-text">Descripción</p>
                <p className="card-text">Precio €</p>
                <p className="card-text">seudónimo vendedor</p>
            </div>
            <div className="card-footer bg-card">
                {/* Botón carrito */}
            <Link
            to="/carrito"
            aria-expanded="false"
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
          </Link>
          

            </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
            <img src="https://i.picsum.photos/id/598/200/200.jpg?hmac=CGTNWD3Wfl8FFUMGok-Kj_SsE7Yc80U-jxup04hpB5k" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><a classNameName="text-1 text-list" href="#">Nombre Producto</a></h5>
                <p className="card-text">Descripción</p>
                <p className="card-text">Precio €</p>
                <p className="card-text">seudónimo vendedor</p>
            </div>
            <div className="card-footer bg-card">
                <small className="text-light">Fav - Carrito</small>
            </div>
            </div>
        </div>
        </div>
        </div>
    )

}

export default CardListaDeProductos;