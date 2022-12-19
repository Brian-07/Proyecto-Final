import React from 'react';
import "../../styles/lista_de_productos.css"

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
                <small className="text-light">Fav - Carrito</small>
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
                <small className="text-light">Fav - Carrito</small>
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