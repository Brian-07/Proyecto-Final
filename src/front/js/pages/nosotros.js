import React from "react";
import "../../styles/nosotros.css";

export const Nosotros = () => {

	return (
		<div className="text-center container">
            <div className="d-flex justify-content-center mt-4">
                <h1 className="titulo">Nosotros</h1>
            </div>
            <div className="rectangulo1">
                <h3 className="d-flex justify-content-start ms-3 pt-2">PetShop Café</h3>
                <p className="text-start lh-sm ms-3 me-1">PetShop Café (anteriormente Fundación Ropitaco), ha invertido casi $300 millones desde que se fundó en 1999 para ayudar a que las comunidades y las familias de mascotas sean más cercanas, más fuertes y más saludables. Junto con PetShop Café, una organización independiente sin fines de lucro que cambia vidas, trabajamos y apoyamos a miles de organizaciones locales de bienestar animal en todo el país y, a través de eventos de adopción en las tiendas, hemos ayudado a encontrar hogares cariñosos para más de 6,5 millones de animales.</p>
            </div>
            <img className="img1" src="https://t2.ea.ltmcdn.com/es/posts/1/8/2/como_sabe_mi_perro_que_lo_quiero_25281_600.webp"></img>
            <div className="rectangulo2">
                <h3 className="d-flex justify-content-start ms-3 pt-2">Abriendo caminos</h3>
                <p className="text-start lh-sm ms-3 me-1">Abriendo el camino Desde nuestra fundación en 1965, hemos sido pioneros en nuevos estándares en el cuidado de mascotas, brindando soluciones integrales de bienestar a través de nuestros productos y servicios, y creando comunidades que profundizan el vínculo entre mascotas y padres.</p>
            </div>
            <img className="img2" src="https://i.pinimg.com/originals/d4/06/07/d40607936e967380920f57af301db773.jpg"></img>
            <div className="rectangulo3">
                <h3 className="d-flex justify-content-start ms-3 pt-2">Operaciones</h3>
                <p className="text-start lh-sm ms-3 me-1">
                Operamos más de 1,500 ubicaciones de Ropita en los EE. UU., México y Puerto Rico, incluida una red creciente de más de 100 hospitales veterinarios en la tienda, y ofrecemos un recurso completo en línea para la salud y el bienestar de las mascotas en petco.com y en la aplicación PetShop Café .</p>
            </div>
		</div>
	);
};
