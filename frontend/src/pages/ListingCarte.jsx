import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import OneProductRow from "@components/OneProductRow";

import axios from "axios";

import "../App.css";

function Carte() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products/`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="background">
      <div className="flex justify-center">
        <div className="w-[85%] py-3">
          <h2 className="bg-orange pl-2 my-4 py-1 font-bold">Nos entrées</h2>

          {products
            .filter((product) => product.category_id === 1)
            .map((product) => (
              <OneProductRow
                title={product.title}
                id={product.id}
                price={product.price}
                description={product.description}
                category={product.category_id}
              />
            ))}

          <h2 className="bg-orange pl-2 my-4 py-1 font-bold">Nos plats</h2>

          {products
            .filter((product) => product.category_id === 2)
            .map((product) => (
              <OneProductRow
                title={product.title}
                id={product.id}
                price={product.price}
                description={product.description}
                category={product.category_id}
              />
            ))}

          <h2 className="bg-orange pl-2 my-4 py-1 font-bold">Nos desserts</h2>

          {products
            .filter((product) => product.category_id === 3)
            .map((product) => (
              <OneProductRow
                title={product.title}
                id={product.id}
                price={product.price}
                description={product.description}
                category={product.category_id}
              />
            ))}

          <h2 className="bg-orange pl-2 my-4 py-1 font-bold">Nos boissons</h2>

          {products
            .filter((product) => product.category_id === 4)
            .map((product) => (
              <OneProductRow
                title={product.title}
                id={product.id}
                price={product.price}
                description={product.description}
                category={product.category_id}
              />
            ))}
        </div>
      </div>
      <div className="flex justify-between px-10">
        <Link to="/menu-du-jour">
          <button
            type="button"
            className="flex justify-center text-white py-2 px-6 bg-orange focus:outline-none font-medium rounded-lg text-sm lg:text-base items-center mb-6 mt-2 mx-auto"
          >
            <p className="text-center">Voir menu du jour</p>
            <svg
              className="invisible w-0 h-0 ml-0 md:ml-2 -mr-1"
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
        <Link to="/createproduct">
          <button
            type="button"
            className="flex justify-center text-white py-2 px-6 bg-gris focus:outline-none font-medium rounded-lg text-sm lg:text-base items-center mb-6 mt-2 mx-auto"
          >
            <p className="text-center">Ajouter produit</p>
            <svg
              className="invisible w-0 h-0 ml-0 md:ml-2 -mr-1"
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
    </div>
  );
}

export default Carte;
