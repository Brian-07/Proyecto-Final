import React from 'react';
import CardListaDeProductos from '../component/card_lista_de_productos.jsx';
import "../../styles/lista_de_productos.css";

function ListaDeProductos(){
    return(
        <div className='container col-12 pt-5 d-flex justify-content-center ps-5'>
            <div className='col-2 me-3 mt-5'>
                <h3 className='titulo-articulos mb-1 display-6'>Artículos</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item bg-text text-light"><strong>Ropa</strong></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Abrigo de perro</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Abrigo de gato</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Jersey de perro</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Jersey de gato</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Impermeables de perro</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Impermeables de gato</a></li>
                <li className="list-group-item bg-text text-light"><strong>Correas</strong></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Abrigo de perro</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Abrigo de gato</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Jersey de perro</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Jersey de gato</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Impermeables de perro</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Impermeables de gato</a></li>
                <li className="list-group-item bg-text text-light"><strong>Collares</strong></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Abrigo de perro</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Abrigo de gato</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Jersey de perro</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Jersey de gato</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Impermeables de perro</a></li>
                <li className="list-group-item"><a className="text-dark text-list" href="#">Impermeables de gato</a></li>
            </ul>
            </div>
            <div className='row col-10 ms-5 mt-5 mb-5'>
            <CardListaDeProductos/>
            <CardListaDeProductos/>
            <CardListaDeProductos/>
            <CardListaDeProductos/>
            </div>
            </div>
            
       
        
    )
}

export default ListaDeProductos;