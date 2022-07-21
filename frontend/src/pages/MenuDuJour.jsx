import React, { useState, useEffect } from "react";

import axios from "axios";

import OneProductOfMenuRow from "../components/OneProductOfMenuRow";

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
      {productsOfMenu.map((productOfMenu, index) => (
        <OneProductOfMenuRow
          label={productOfMenu.label}
          id={productOfMenu.id}
          price_menu={productOfMenu.price_menu}
          starter_id={productOfMenu.starter_id}
          main_course_id={productOfMenu.main_course_id}
          dessert_id={productOfMenu.dessert_id}
          key={index}
        />
      ))}
    </div>
  );
}

export default MenuDuJour;
