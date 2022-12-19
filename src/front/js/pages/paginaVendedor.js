import React from "react";

export const PagVendedor = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-start mt-5">
        <h1 className="mt-5 display-2 titulo-login ms-5">Súbelo!</h1>
      </div>
      <div className="card bg-light mb-5 rounded-3 border-primary col-11 ms-5">
        <div className="row col-12 d-flex mb-5 mt-3">
          {/* Subir fotos */}
          <div className="text-bg-light col-1 mt-5 d-flex ms-5">
            <h3>Fotos:</h3>
          </div>
          {/* Carta foto1 */}
          <div className="col-2 p-0 d-flex align-items-end ms-2">
            <img
              src="https://via.placeholder.com/150C/Ohttps://placeholder.com/#How_To_Set_Image_Size"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          {/* Carta foto2 */}
          <div className="col-2 p-0 d-flex align-items-end">
            <img
              src="https://via.placeholder.com/150C/Ohttps://placeholder.com/#How_To_Set_Image_Size"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          {/* Carta foto3 */}
          <div className="col-2 p-0 d-flex align-items-end">
            <img
              src="https://via.placeholder.com/150C/Ohttps://placeholder.com/#How_To_Set_Image_Size"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          {/* Carta foto4 */}
          <div className="col-2 p-0 d-flex align-items-end">
            <img
              src="https://via.placeholder.com/150C/Ohttps://placeholder.com/#How_To_Set_Image_Size"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          {/* Carta foto5 */}
          <div className="col-2 p-0 d-flex align-items-end">
            <img
              src="https://via.placeholder.com/150C/Ohttps://placeholder.com/#How_To_Set_Image_Size"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <hr className="col-11 ms-5 mt-1 border border-primary border-2"></hr>
          {/* Categoria */}
          <div className="text-bg-light col-2 mt-2 d-flex ms-5">
            <h3>Categoría:</h3>
          </div>
          {/* input Categoria */}
          <div className="col-3 d-flex align-items-end">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>Seleccione</option>
              <option defaultValue="1">Ropas</option>
              <option defaultValue="2">Correas</option>
              <option defaultValue="3">Collares</option>
            </select>
          </div>
          {/* Sub-Categoria */}
          <div className="text-bg-light col-2 mt-2 d-flex ms-1">
            <h3>Sub/Categoría:</h3>
          </div>
          {/* input Sub-Categoria */}
          <div className="col-3 d-flex align-items-end ms-5">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>Seleccione</option>
              <option defaultValue="1">Sub-Ropa</option>
              <option defaultValue="2">Sub-Correas</option>
              <option defaultValue="3">Sub-Collares</option>
            </select>
          </div>
          <hr className="col-11 ms-5 mt-1 border border-primary border-2"></hr>
          {/* Titulo */}
          <div className="text-bg-light col-2 mt-3  d-flex ms-5">
            <h3>Título:</h3>
          </div>
          {/* Input 1 */}
          <div className="col-6 d-flex align-items-end">
            <input
              type="text"
              className="form-control p-2"
              placeholder="Ingresa el Título del producto..."
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <hr className="col-11 ms-5 mt-1 border border-primary border-2"></hr>
          {/* Descripcion */}
          <div className="text-bg-light col-2 mt-3 d-flex ms-5">
            <h3>Descripción:</h3>
          </div>
          {/* Text Area 1 */}
          <div className="col-6 d-flex align-items-end form-floating">
            <textarea
              style={{ height: "100px" }}
              className="form-control"
              id="floatingTextarea2"
              placeholder="Escribe la descripción del producto..."
            ></textarea>
          </div>
          <hr className="col-11 ms-5 mt-1 border border-primary border-2"></hr>
          {/* Detalles */}
          <div className="text-bg-light col-2 mt-2 d-flex ms-5">
            <h3>Detalles:</h3>
          </div>
          {/* Text Area 2 */}
          <div className="col-6 d-flex align-items-end form-floating">
            <textarea
              className="form-control"
              placeholder="Escribe los detalles del producto..."
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <hr className="col-11 ms-5 mt-1 border border-primary border-2"></hr>
          {/* Precio */}
          <div className="text-bg-light col-2 mt-3 d-flex ms-5">
            <h3>Precio:</h3>
          </div>
          {/* Input 2 */}
          <div className="col-2 d-flex align-items-end ">
            <input
              type="number"
              className="form-control p-2"
              placeholder="0,00"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
            <label>
              <h3 className="ms-3">€</h3>
            </label>
          </div>
          <hr className="col-11 ms-5 mt-1 border border-primary border-2"></hr>
          {/* Botones */}
          <div className="col-12 d-flex justify-content-center">
            <button className="btn-lg btn-primary mt-2 p-2" type="submit">
              Subir Producto!
            </button>
            <button className="btn-lg btn-danger mt-2 ms-3 p-2" type="submit">
              Me arrepentí!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
