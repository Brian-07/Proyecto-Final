import React from "react";
import "../../styles/Login.css";
import logo from "../../img/logo.png";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container pt-5 mb-5 mt-5 d-flex justify-content-start">
      <main className="form-signin mb-5">
        <form>
          <img className="mb-4" src={logo} alt="" width="72" height="57 " />
          <h1 className="mb-3 display-1 titulo-login">Ingresa a tu cuenta</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control border-gradient border-gradient-purple"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email</label>
            <br />
          </div>
          <div className="form-floating ">
            <input
              type="password"
              className="form-control border-gradient border-gradient-purple"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3 mt-3">
            <label>
              <input type="checkbox" value="remember-me" /> Recuerdame
            </label>
          </div>
          <button className="w-50 btn btn-lg button-login text-light button-login1" type="submit">
            Ingresar
          </button>
        </form>
        <br/>
        <p>Aún no tienes cuenta? <Link to="/crear_cuenta" className='text-primary text-login'>Crear cuenta</Link></p>
      </main>
     
    </div>
  );
}

export default Login;
