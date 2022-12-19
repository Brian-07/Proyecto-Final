import React from "react";
import CardMisArticulos from "../component/cardMisArticulos.jsx";
import "/workspace/Proyecto-Final/src/front/styles/misArticulos.css"

function MisArticulos() {
    return(
    <div className="container pt-5 mb-5 mt-5  text-center">
            <h1 className="mb-3 display-4 titulo-login">Artículos en venta</h1>
    <CardMisArticulos/>
    <CardMisArticulos/>
    <CardMisArticulos/>
    <CardMisArticulos/>
    <CardMisArticulos/>
    <CardMisArticulos/>
        
    </div>   );
}

export default MisArticulos;