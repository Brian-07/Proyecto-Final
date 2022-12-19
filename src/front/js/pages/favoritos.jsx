import React from "react";
import CardFavoritos from "../component/favoritos.jsx"
import "/workspace/Proyecto-Final/src/front/styles/favoritos.css"

function Favoritos() {
    return(
    <div className="container pt-5 mb-5 mt-5  text-center">
            <h1 className="mb-3 display-4 titulo-login">Favoritos</h1>
    <CardFavoritos/>
    <CardFavoritos/>
    <CardFavoritos/>
    <CardFavoritos/>
    <CardFavoritos/>
    <CardFavoritos/>
    </div>   );
}

export default Favoritos;