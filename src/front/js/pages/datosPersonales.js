import React from "react";
import { useNavigate } from "react-router-dom";
import config from "../config";
import { useState, useEffect } from "react";


export const DatosPersonales = () => {
  const [disabled, setDisabled] = useState(true);
  const [detalle, modificarDetalle] = useState({});
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
            return res.json()
          })
          .then((data) => {
            if (!data.data) {
              navigate("/login");
              return;
            }
            modificarDetalle(data.data)
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

  const modificarDatos = async () => {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const domicilio = document.getElementById("domicilio").value;
    const localidad = document.getElementById("localidad").value;
    const provincia = document.getElementById("provincia").value;
    const CP = document.getElementById("CP").value;
    const DNI = document.getElementById("DNI").value;

    const body = JSON.stringify({
      nombre:nombre,
      apellido:apellido,
      domicilio:domicilio,
      localidad:localidad,
      provincia:provincia,
      CP:CP,
      DNI:DNI,
    });

    const res = await fetch(`${config.HOSTNAME}/api/datos_personales/${detalle.usuarioId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    const data = await res.json();
    if (res.status != 200) {
      alert(data.msg);
      return;
    }
    console.log(detalle);
    navigate("/pag_usuario");

  }

  const cancelarCambios = () =>{
    navigate("/pag_usuario")
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-start mt-5">
        <h1 className="mt-5 display-2 titulo-login">Datos Personales</h1>
      </div>
      <div className="card bg-light mb-3 rounded-3 border-primary">
        <div className="card-body">
          <div className="row g-3 needs-validation" noValidate>
            <div className="col-md-4">
              <label className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                defaultValue= {detalle.Nombre}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                defaultValue={detalle.Apellido}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label className="form-label">
                Email
              </label>
              <div className="input-group has-validation">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  defaultValue={detalle.email}
                  readOnly
                />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Domicilio
              </label>
              <input
                type="text"
                className="form-control"
                id="domicilio"
                defaultValue={detalle.Domicilio}
                required
              />

              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Localidad
              </label>
              <input
                type="text"
                className="form-control"
                id="localidad"
                defaultValue={detalle.Localidad}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Código Postal
              </label>
              <input
                type="text"
                className="form-control"
                id="CP"
                defaultValue={detalle.CP}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Provincia
              </label>
              <input
                type="text"
                className="form-control"
                id="provincia"
                defaultValue={detalle.Provincia}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
          
            <div className="col-md-2">
              <label className="form-label">
                Tipo de documento
              </label>
              <select className="form-select" id="validationCustom08" >
                <option  disabled>
                  Elija
                </option>
                <option>DNI</option>
                <option>NIF</option>
                <option>NIE</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid DNI/NIF/NIE.
              </div>
            </div>
            <div className="col-md-3">
              <label className="form-label">
                Número
              </label>
              <input
                type="text"
                className="form-control"
                id="DNI"
                defaultValue={detalle.DNI}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-5">
              <button className="btn btn-primary me-5 p-2" type="submit" onClick={modificarDatos}>
                Guardar Cambios
              </button>
              <button className="btn btn-danger" type="submit" onClick={cancelarCambios}>
                Cancelar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
