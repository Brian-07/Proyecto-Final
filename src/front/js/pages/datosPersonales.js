import React from "react";

export const DatosPersonales = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-start mt-5">
        <h1 className="mt-5 display-2 titulo-login">Datos Personales</h1>
      </div>
      <div className="card bg-light mb-3 rounded-3 border-primary">
        <div className="card-body">
          <form className="row g-3 needs-validation" novalidate>
            <div className="col-md-4">
              <label for="validationCustom01" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom02" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <div className="input-group has-validation">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  readOnly
                />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom03" className="form-label">
                Domicilio
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                required
              />

              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom04" className="form-label">
                Localidad
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom04"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom05" className="form-label">
                Código Postal
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom06" className="form-label">
                Provincia
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom06"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom07" className="form-label">
                Móvil
              </label>
              <input
                type="number"
                className="form-control"
                id="validationCustom07"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-2">
              <label for="validationCustom08" className="form-label">
                Tipo de documento
              </label>
              <select className="form-select" id="validationCustom08" required>
                <option selected disabled>
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
              <label for="validationCustom09" className="form-label">
                Número
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom09"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-5">
              <button className="btn btn-primary me-5 p-2" type="submit">
                Guardar Cambios
              </button>
              <button className="btn btn-danger" type="submit">
                Cancelar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
