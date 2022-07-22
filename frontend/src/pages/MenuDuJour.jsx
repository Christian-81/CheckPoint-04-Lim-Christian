import React, { useState, useEffect } from "react";

import axios from "axios";

import OneProductOfMenuRow from "../components/OneProductOfMenuRow";

import "../App.css";

function MenuDuJour() {
  const [productsOfMenu, setProductsOfMenu] = useState([]);
console.log(productsOfMenu);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/menu/`)
      .then((res) => setProductsOfMenu(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-purple-200">
      {productsOfMenu.map((productOfMenu, index) => (
        <OneProductOfMenuRow
          productOfMenu={productOfMenu}
          key={index}
          // id={productOfMenu.id}
          // price_menu={productOfMenu.price_menu}
          // starter_id={productOfMenu.starter_title}
          // main_course_id={productOfMenu.main_course}
          // dessert_id={productOfMenu.dessert}
        />
      ))}
    </div>
  );
}

export default MenuDuJour;
