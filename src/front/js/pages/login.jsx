import React from "react";
import "../../styles/Login.css";
import logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import config from "../config";

function Login() {
  const navigate = useNavigate();
  const loguearse =async () => {
    const email = document.getElementById("current-email").value;
    const password = document.getElementById("current-password").value;
    
    const body = JSON.stringify({email,password});
    const res = await fetch(`${config.HOSTNAME}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    const data = await res.json();
    if(res.status == 200){
      const token = data.data;
      localStorage.token = JSON.stringify({token});
      navigate("/pag_usuario");
      return;
    }else if(res.status != 200){
      alert(data.msg);
      return;
    };
  };

  return (
    <div className="container pt-5 mb-5 mt-5 d-flex justify-content-start">
      <main className="form-signin mb-5">
        <img className="mb-4" src={logo} alt="" width="72" height="57 " />
        <h1 className="mb-3 display-1 titulo-login">Ingresa a tu cuenta</h1>

        <div className="form-floating">
          <input
            id="current-email"
            name="current-email"
            type="current-email"
            placeholder="Email"
            autoComplete="email"
            required
            className="form-control border-gradient border-gradient-purple"
          />
          <label htmlFor="floatingInput">Email</label>
          <br />
        </div>
        <div className="form-floating ">
          <input
            className="form-control border-gradient border-gradient-purple"
            name="current-password"
            type="password"
            autoComplete="current-password"
            id="current-password"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3 mt-3">
          <label>
            <input type="checkbox" value="remember-me" /> Recuerdame
          </label>
        </div>
        <button
          className="w-50 btn btn-lg button-login text-light button-login1"
          type="submit"
          onClick={loguearse}
        >
          Ingresar
        </button>

        <br />
        <p>
          Aún no tienes cuenta?{" "}
          <Link to="/crear_cuenta" className="text-primary text-login">
            Crear cuenta
          </Link>
        </p>
      </main>
    </div>
  );
}

export default Login;
