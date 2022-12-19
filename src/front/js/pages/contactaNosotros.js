import React from "react";
import contacto from "../../img/Contact-Us.png";

export const ContactaNosotros = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5 mb-4 text-center">
        <h1 className="mb-3 mt-5 display-2 titulo-login">
          Contacta con Nosotros
        </h1>
      </div>
      <div className="d-flex">
        <div className="w-50 mt-5 mb-5">
          <p className="mb-5 lh-1">
            ¡Estamos aquí para ayudar! Envíenos su consulta a través del
            siguiente formulario o envíenos un correo electrónico a
            helpdesk@gstudio.com para cualquier problema que tenga.
          </p>
          <div className=" mb-3">
            <label htmlFor="lastName" className="form-label">
              Nombre y Apellidos:<span className="text-muted"></span>
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreApellido"
              placeholder=""
              required
            />
            <div className="invalid-feedback">
              Porfavor introduce un apellido
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Escriba su mensaje aquí:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary w-50 p-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Enviar
            </button>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Contacta con nosotros
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-dialog">
                    <h3>Su mensaje ha sido enviado!</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ms-auto mt-4 ">
          <img
            src="https://3000-4geeksacade-reactflaskh-fz45q57shqe.ws-eu79.gitpod.io/Contact-Us.png"
            className="d-block"
          />
        </div>
      </div>
    </div>
  );
};
