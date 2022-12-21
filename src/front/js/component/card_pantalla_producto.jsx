import React, {useEffect, useContext}from 'react';
import "/workspace/Proyecto-Final/src/front/styles/pantalla_de_productos.css"
import { Link } from 'react-router-dom';
import {Context} from "../store/appContext.js"

function CardPantallaDeProducto(){

  const {store,actions} = useContext(Context)
      useEffect(() =>{
       actions.getFavoritos()} 
       ,[]
      )
      console.log(store.productos.productos?.[0])

    return(
    <div className='container row mt-5 pt-5'>
       {/* Imagen */}
        <div className='col-lg-5 '><img src="https://picsum.photos/seed/picsum/500/800" class="card-img-top border border-dark border-1 rounded" style={{height: "500px"}} alt="product_photo"/>
        
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
            <h5 className="card-title display-5 titulo-producto">{store.productos.productos?.[0].titulo}</h5>
            
            <p className='text'>{store.productos.productos?.[0].productoId}</p>
            <p className='text'>Nombre del vendedor</p>
            <p className='text'>Valoración</p>
            <hr/>
            <h4 className="card-subtitle mb-2 titulo-producto">PRECIO</h4>
            <p className="card-text">{store.productos.productos?.[0].precio}</p>
            <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active text " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Descripción</button>
              <button className="nav-link text" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Detalles</button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">{store.productos.productos?.[0].descripcion}</div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">{store.productos.productos?.[0].detalles}
            </div>
            {/* Botones fav y carrito */}
            <div className='row mt-3'>
            <button  className='col-1 btn btn btn-outline-info'><Link to="/carrito"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-cart3 user text-dark"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg></Link></button><button onClick = { () => actions.getFavoritos(producto.titulo)} className='col-1 btn btn-outline-info ms-2'><Link to="/favoritos"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-heart-fill user mt-1 text-danger"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg></Link></button>
            </div>
          </div>
          
        </div>
        </div>
        
        </div>
        
        
    </div>
 
    )
}

export default CardPantallaDeProducto;