import React from "react";
import CardMisArticulos from "../component/cardMisArticulos.jsx";
import "../../styles/misArticulos.css";
import { useNavigate } from "react-router-dom";
import config from "../config";
import { useState, useEffect } from "react";

function MisArticulos() {
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
    <div className="container pt-5 mb-5 mt-5  text-center">
      <h1 className="mb-3 display-4 titulo-login">Artículos en venta</h1>
      <CardMisArticulos />
      <CardMisArticulos />
      <CardMisArticulos />
      <CardMisArticulos />
      <CardMisArticulos />
      <CardMisArticulos />
    </div>
  );
}

export default MisArticulos;
