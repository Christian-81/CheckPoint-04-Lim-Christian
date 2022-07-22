import React, { useState, useEffect } from "react";

import axios from "axios";

import OneProductOfMenuRow from "../components/OneProductOfMenuRow";

import "../App.css";

function MenuDuJour() {
  const [productsOfMenu, setProductsOfMenu] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/menu/`)
      .then((res) => setProductsOfMenu(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-purple-200">
      {productsOfMenu.map((productOfMenu) => (
        <OneProductOfMenuRow productOfMenu={productOfMenu} />
      ))}
    </div>
  );
}

export default MenuDuJour;
