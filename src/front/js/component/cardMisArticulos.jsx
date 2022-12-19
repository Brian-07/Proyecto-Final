import React from 'react';

function CardMisArticulos(){
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
                    <button className="btn btn-primary btn-custom button-login1 me-1" type="button">Editar</button>
                    <button className="btn btn-primary btn-custom2 button-login2 me-1" type="button">Eliminar</button>
                </div>
                    
                </div>
            </div>
        </div>

    )
}

export default CardMisArticulos;