import React from 'react';

function CardFavoritos(){
    return(
        
        <div className="card mb-3 justify-content-center d-inline-flex rounded borde border-info border-2" >
            <div className="row g-0">
                <div className="col-md-4 d-flex">
                <img src="https://i.picsum.photos/id/715/200/200.jpg?hmac=eR-80S6YYIV9vV26EYLSVACDM5HWe94Oz2hx0icP5vI" className="img-fluid rounded-start rounded" alt="..."/>
                </div>
                <div className="row col-md-8">
                <div className="col-4 card-body d-flex">
                    <h5 className="card-title justify-content-start">Card title</h5>
                </div>
                <p className="card-text card-text text-start">Total: 100$</p>
             
                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary btn-custom mx-5 button-login1" type="button">Comprar</button>
                    <button className="btn btn-primary btn-custom2 button-login2" type="button">Eliminar</button>
                </div>
                    
                </div>
            </div>
        </div>

    )
}

export default CardFavoritos;