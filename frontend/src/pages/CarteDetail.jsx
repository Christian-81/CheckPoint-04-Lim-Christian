import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

function CarteDetail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState([{}]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`)
      .then((res) => setProductDetail(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteProduct = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/deleteproduct/${id}`)
      .catch((err) => console.error(err))
      .finally((window.location.href = "/"));
  };

  return (
    <div className="flex flex-col justify-center text-center bg-slate-100">
      <img
        src={productDetail.img}
        alt={productDetail.alt}
        className="rounded-lg m-4"
      />
      <div className="flex flex-row justify-between items-center px-5 mb-1">
        <h1 className="font-titre text-2xl">{productDetail.title}</h1>
        <p className="font-titre text-2xl">{productDetail.price}€</p>
      </div>
      <p className="text-left text-xs px-5 mb-6">{productDetail.description}</p>
      <div className="flex justify-between px-5">
        <div>
          <Link to="/">
            <button
              type="button"
              className="flex justify-center text-white py-2 px-6 bg-orange focus:outline-none font-medium rounded-lg text-sm lg:text-base items-center mb-6 mt-2 mx-auto"
            >
              <p className="text-center">Retour à la carte</p>
              <svg
                className="w-0 h-0 ml-0 md:visible md:w-4 md:h-4 md:ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div>
          <button
            onClick={() => deleteProduct()}
            type="button"
            className="flex justify-center text-white py-2 px-6 bg-red-800 focus:outline-none font-medium rounded-lg text-sm lg:text-base items-center mb-6 mt-2 mx-auto"
          >
            <p className="text-center">Supprimer</p>
            <svg
              className="w-0 h-0 ml-0 md:visible md:w-4 md:h-4 md:ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarteDetail;
