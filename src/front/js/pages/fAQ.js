import React from "react";
import "../../styles/nosotros.css";

export const FAQ = () => {
  return (
    <div className="fondo container">
      <div className="d-flex justify-content-center mt-5 mb-4 text-center">
        <h1 className="mb-3 mt-4 display-2 titulo-login">
          Preguntas Frecuentes
        </h1>
      </div>
      <div className="text-center">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            ¿Cómo puedo hacer una devolución?
          </button>
          <ul className="dropdown-menu dropdown-menu-lg-end text-cente">
            <li>
              <span className="dropdown-item-text ">
                Devolvernos ropa es muy fácil, no tiene ningún coste para ti y
                tienes un plazo de hasta 15 días naturales para hacer tu
                devolución desde que recibes el pedido.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-3">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            ¿Puedo agrupar varios pedidos para no pagar gastos de envío?
          </button>
          <ul className="dropdown-menu dropdown-menu-lg-end text-cente">
            <li>
              <span className="dropdown-item-text ">
                Con nuestro sistema Compra y Agrupa, cuando realices más de un
                pedido, los agruparemos posteriormente mientras el primero esté
                en el estado "Pedido realizado".
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-3">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            ¿Cuánto tiempo tardará mi pedido en llegar a casa?
          </button>
          <ul className="dropdown-menu dropdown-menu-lg-end text-cente">
            <li>
              <span className="dropdown-item-text ">
                Entregamos los pedidos en un plazo de 24 a 48 horas en toda
                España; ese es el compromiso que asumimos, sin tener en cuenta
                fines de semana y días festivos. Es decir, si haces un pedido el
                martes, la empresa de mensajería te lo llevará el jueves como
                muy tarde..
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-3">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            ¿Cómo puedo pagar mi pedido?
          </button>
          <ul className="dropdown-menu dropdown-menu-lg-end text-cente">
            <li>
              <span className="dropdown-item-text ">
                Tienes 5 diferentes formas de pagar tu pedido. Con Tarjeta de
                crédito o débito, por PayPal, con Klarna, por Amazon-Pay y
                Contra Reembolso. Este último medio de pago lleva una comisión
                del 3% (min. 3,90€) que nos factura la empresa de mensajería por
                la gestión del cobro.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-3">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            ¿Puedo desistir de mi pedido?
          </button>
          <ul className="dropdown-menu dropdown-menu-lg-end text-cente">
            <li>
              <span className="dropdown-item-text ">
                El derecho a desistimiento es sólo aplicable a un pedido que
                esté intacto y en las mismas condiciones que ha sido enviado, y
                en un plazo de 14 días naturales a contar desde la entrega del
                pedido.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-3">
        <div className="btn-group mb-5">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            ¿Hacéis envíos Internacionales?
          </button>
          <ul className="dropdown-menu dropdown-menu-lg-end text-cente">
            <li>
              <span className="dropdown-item-text ">
                Lo sentimos mucho pero todavía no hacemos envíos
                Internacionales. Enviamos pedidos a toda España, incluido Islas
                Baleares! (aunque aún no podemos enviar a Canarias, Ceuta y
                Melilla).
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
