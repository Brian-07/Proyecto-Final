import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/Login.css";
import config from "../config";

function CreateAccount() {
  const navigate = useNavigate()
  const crearUsuario = async () => {
    const nombre = document.getElementById("firstName").value;
    const apellido = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    if (password1 < 6) {
      alert("La contraseña debe ser mayor a 6 caracteres!");
      return;
    }

    if (password1 != password2) {
      alert("Las contraseñas no coinciden!");
      return;
    }

    const body = JSON.stringify({
      nombre,
      apellido,
      email,
      password1: password1,
      password2: password2,
    });

    const res = await fetch(`${config.HOSTNAME}/api/crear_cuenta`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    const data = await res.json();
    if (res.status != 201) {
      alert(data.msg);
      return;
    }
    navigate("/login");
  };

  return (
    <div>
      <div className="container pt-5 mb-5 mt-5 d-flex justify-content-start">
        <main className="form-signin">
          <img className="mb-4" src={logo} alt="" width="72" height="57 " />
          <div className="col-md-7 col-lg-8">
            <h1 className="mb-3 display-1 titulo-login">Crear cuenta</h1>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  Nombre<span className="text-muted">(Obligatorio)</span>
                </label>
                <input
                  type="text"
                  className="form-control border-gradient border-gradient-purple"
                  id="firstName"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback ">
                  Porfavor introduce un nombre
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Apellidos<span className="text-muted">(Obligatorio)</span>
                </label>
                <input
                  type="text"
                  className="form-control border-gradient border-gradient-purple"
                  id="lastName"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Porfavor introduce un apellido
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-muted">(Obligatorio)</span>
                </label>
                <input
                  type="email"
                  className="form-control border-gradient border-gradient-purple"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Porfavor introduce un email válido
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control border-gradient border-gradient-purple"
                  id="password1"
                  placeholder="********"
                  required
                />
                <div className="invalid-feedback">
                  Porfavor introduce tu password
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Confirmar Password
                </label>
                <input
                  type="password"
                  className="form-control border-gradient border-gradient-purple"
                  id="password2"
                  placeholder="********"
                  required
                />
                <div className="invalid-feedback">
                  Porfavor introduce tu password
                </div>
              </div>
              <div className="checkbox mb-3"></div>
              <p>
                <button
                  className="w-25 btn btn-lg button-login text-light button-login1 me-5"
                  onClick={crearUsuario}
                >
                  Crear Cuenta
                </button>

                <button className="w-25 btn btn-lg btn btn-danger">
                  Cancelar
                </button>
              </p>
              <p>
                Ya tienes cuenta?{" "}
                <Link to="/Login" className="text-primary text-login">
                  Logueate
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CreateAccount;
