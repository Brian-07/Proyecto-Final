import React from "react";
import "../../styles/nosotros.css";

export const Nosotros = () => {
  return (

    <div className="container-md pt-5">
      <div><h1 className="mb-3 display-1 titulo-nosotros">Nosotros</h1></div>
     {/* FILA 1 */}
      <div className="card mb-3 d-inline-flex rounded">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://t2.ea.ltmcdn.com/es/posts/1/8/2/como_sabe_mi_perro_que_lo_quiero_25281_600.webp" className="img-fluid rounded-start" alt="foto-perro"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title encabezado">PetShop Café</h5>
            <p className="card-text">PetShop Café (anteriormente Fundación Ropitaco), ha invertido casi
              $300 millones desde que se fundó en 1999 para ayudar a que las
              comunidades y las familias de mascotas sean más cercanas, más
              fuertes y más saludables. Junto con PetShop Café, una organización
              independiente sin fines de lucro que cambia vidas, trabajamos y
              apoyamos a miles de organizaciones locales de bienestar animal en
              todo el país y, a través de eventos de adopción en las tiendas,
              hemos ayudado a encontrar hogares cariñosos para más de 6,5
              millones de animales.
            </p>
          </div>
        </div>
      </div>
    </div>    
    {/* FILA 2 */}
    <div className="card mb-3 d-inline-flex rounded">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title encabezado">Abriendo caminos</h5>
            <p className="card-text">Abriendo el camino Desde nuestra fundación en 1965, hemos sido
            pioneros en nuevos estándares en el cuidado de mascotas, brindando
            soluciones integrales de bienestar a través de nuestros productos y
            servicios, y creando comunidades que profundizan el vínculo entre
            mascotas y padres.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img src="https://i.pinimg.com/originals/d4/06/07/d40607936e967380920f57af301db773.jpg" className="img-fluid rounded-end" alt="foto-perro"/>
        </div>
      </div>
    </div>    
    {/* FILA 3 */}
    <div className="card mb-3 d-inline-flex rounded">
      <div className="row g-0">
      <div className="col-md-4">
          <img src="https://i.pinimg.com/originals/d4/06/07/d40607936e967380920f57af301db773.jpg" className="img-fluid rounded-end" alt="foto-perro"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title encabezado">Operaciones</h5>
            <p className="card-text">Operamos más de 1,500 ubicaciones de Ropita en los EE. UU., México y
            Puerto Rico, incluida una red creciente de más de 100 hospitales
            veterinarios en la tienda, y ofrecemos un recurso completo en línea
            para la salud y el bienestar de las mascotas en petco.com y en la
            aplicación PetShop Café .
            </p>
          </div>
        </div>
      </div>
    </div>    
  </div>
    
  );
};
