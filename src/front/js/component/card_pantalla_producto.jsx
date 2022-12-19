import React from 'react';
import "../../styles/pantalla_de_productos.css"

function CardPantallaDeProducto(){
    return(
    <div className='container row mt-5 pt-5'>
       {/* Imagen */}
        <div className='col-lg-5 '><img src="https://picsum.photos/seed/picsum/500/800" class="card-img-top " style={{height: "500px"}} alt="product_photo"/>
        <div className='row d-flex align-items-end'>
        {/* Carta foto1 */}
          <div className="col-2 p-0 d-flex align-items-end ms-5">
            <img
              src="https://via.placeholder.com/150https://placeholder.com/#How_To_Set_Image_Size"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          {/* Carta foto2 */}
          <div className="col-2 p-0 d-flex align-items-end">
            <img
              src="https://via.placeholder.com/150https://placeholder.com/#How_To_Set_Image_Size"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          {/* {/ Carta foto3 /} */}
          <div className="col-2 p-0 d-flex align-items-end">
            <img
              src="https://via.placeholder.com/150https://placeholder.com/#How_To_Set_Image_Size"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          {/* {/ Carta foto4 /} */}
          <div className="col-2 p-0 d-flex align-items-end ">
            <img
              src="https://via.placeholder.com/150https://placeholder.com/#How_To_Set_Image_Size"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          </div></div>
        {/* Card */}
        <div className='col-lg-7 '>
          <div className="card ">
          <div className="card-body">
            <h5 className="card-title display-5 titulo-producto">Nombre del producto</h5>
            <p className='text'>Codigo del producto</p>
            <p className='text'>Nombre del vendedor</p>
            <p className='text'>Valoración</p>
            <hr/>
            <h4 className="card-subtitle mb-2 titulo-producto">PRECIO</h4>
            <p className="card-text">200 $</p>
            <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active text" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Descripción</button>
              <button className="nav-link text" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Detalles</button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</div>
          </div>
        </div>
        </div>
        
        </div>
        
    </div>
 
    )
}

export default CardPantallaDeProducto;