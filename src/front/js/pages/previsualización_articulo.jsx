import React from "react";
import CardPrevisualizaciónArticulo from "../component/card_previsualizacion_articulo.jsx";
import { useNavigate } from "react-router-dom";
import config from "../config";
import { useState, useEffect } from "react";

function PrevisualizacionArticulo() {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenObj = localStorage.token;
    if (!tokenObj) {
      navigate("/login");
    } else {
      try {
        const tokenData = JSON.parse(tokenObj);

        fetch(`${config.HOSTNAME}/api/privado`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${tokenData.token}`,
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (!data.data) {
              navigate("/login");
              return;
            }

            setDisabled(false);
          });
      } catch (e) {
        navigate("/login");
        return;
      }
    }
  }, [disabled]);

  if (disabled) {
    return (
      <div>
        <h1>Cargando</h1>
      </div>
    );
  }
  return (
    <div className="container pt-4 mb-5 py-5">
      <CardPrevisualizaciónArticulo />
    </div>
  );
}

export default PrevisualizacionArticulo;
