import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Login.css"



function CreateAccount(){
    return (
    <div className='container w-20 pt-5'>
      <div className="col-md-7 col-lg-8">
        <h2 className="mt-5">Crear Cuenta</h2>
        <form className="needs-validation" novalidate />
        <div className="row g-3">
        <div className="col-sm-6">
            <label for="firstName" className="form-label">Nombre<span className="text-muted">(Obligatorio)</span></label>
            <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
            <div className="invalid-feedback ">
            Porfavor introduce un nombre
        </div>
       </div>

          <div className="col-sm-6">
            <label for="lastName" className="form-label">Apellidos<span className="text-muted">(Obligatorio)</span></label>
            <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
            <div className="invalid-feedback">
            Porfavor introduce un apellido
          </div>
          </div>
          <div className="col-12">
            <label for="email" className="form-label">Email <span className="text-muted">(Obligatorio)</span></label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
            <div className="invalid-feedback">
            Porfavor introduce un email válido
            </div>
          </div>

          <div className="col-12">
            <label for="address" className="form-label">Password</label>
            <input type="text" className="form-control" id="address" placeholder="********" required />
            <div className="invalid-feedback">
            Porfavor introduce tu password
            </div>
          </div>
          <div className="col-12">
            <label for="address" className="form-label">Confirmar Password</label>
            <input type="text" className="form-control" id="address" placeholder="********" required />
            <div className="invalid-feedback">
              Porfavor introduce tu password
            </div>
          </div>
          <div classNameName="checkbox mb-3">
      </div>
      <p>
        <a href="#" className="btn btn-primary my-2">Crear Cuenta</a>
        <a href="#" className="btn btn-secondary my-2 mx-3">Cancelar</a>
      </p>
      <p>Ya tienes cuenta? <Link to="/Login" className='text-primary'>Logeate</Link></p>
        </div>
        </div>
      </div>)
}

export default CreateAccount;