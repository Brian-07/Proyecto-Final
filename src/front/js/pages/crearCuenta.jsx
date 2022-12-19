import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../img/logo.png";
import "/workspace/Proyecto-Final/src/front/styles/Login.css"



function CreateAccount(){
    return (
      <div>
    <div className="container pt-5 mb-5 mt-5 d-flex justify-content-start">
    <main className="form-signin">
    <img className="mb-4" src={logo} alt="" width="72" height="57 " />
      <div className="col-md-7 col-lg-8">
      <h1 className="mb-3 display-1 titulo-login">Crear cuenta</h1>
        <form className="needs-validation" novalidate />
        <div className="row g-3">
        <div className="col-sm-6">
            <label for="firstName" className="form-label">Nombre<span className="text-muted">(Obligatorio)</span></label>
            <input type="text" className="form-control border-gradient border-gradient-purple" id="firstName" placeholder="" value="" required />
            <div className="invalid-feedback ">
            Porfavor introduce un nombre
        </div>
       </div>

          <div className="col-sm-6">
            <label for="lastName" className="form-label">Apellidos<span className="text-muted">(Obligatorio)</span></label>
            <input type="text" className="form-control border-gradient border-gradient-purple" id="lastName" placeholder="" value="" required />
            <div className="invalid-feedback">
            Porfavor introduce un apellido
          </div>
          </div>
          <div className="col-12">
            <label for="email" className="form-label">Email <span className="text-muted">(Obligatorio)</span></label>
            <input type="email" className="form-control border-gradient border-gradient-purple" id="email" placeholder="you@example.com" />
            <div className="invalid-feedback">
            Porfavor introduce un email válido
            </div>
          </div>

          <div className="col-12">
            <label for="address" className="form-label">Password</label>
            <input type="password" className="form-control border-gradient border-gradient-purple" id="address" placeholder="********" required />
            <div className="invalid-feedback">
            Porfavor introduce tu password
            </div>
          </div>
          <div className="col-12">
            <label for="address" className="form-label">Confirmar Password</label>
            <input type="password" className="form-control border-gradient border-gradient-purple" id="address" placeholder="********" required />
            <div className="invalid-feedback">
              Porfavor introduce tu password
            </div>
          </div>
          <div classNameName="checkbox mb-3">
      </div>
      <p>
        <a href="#" className="w-25 btn btn-lg button-login text-light button-login1 me-5">Crear Cuenta</a>
        
        <a href="#" className="w-25 btn btn-lg btn btn-danger">Cancelar</a>
      </p>
      <p>Ya tienes cuenta? <Link to="/Login" className='text-primary text-login'>Logueate</Link></p>
        </div>
        </div>
        </main>
      </div>
      </div>
      )
}

export default CreateAccount;