import React from "react";

import { Link } from "react-router-dom";

function OneProductRow({ title, price, id }) {
  return (
    <div className="mb-1 font-body text-xs">
      <Link to={`/products/${id}`}>
        <div className="flex flex-row justify-between w-full text-white">
          <h1 className="ml-2 font-normal">{title}</h1>
          <p className="mr-3">{price} €</p>
        </div>
      </Link>
    </div>
  );
}

export default OneProductRow;
