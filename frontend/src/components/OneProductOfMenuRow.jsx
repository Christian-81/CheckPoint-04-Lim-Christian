import React from "react";

import "../App.css";

const OneProductOfMenuRow = ({
  label,
  price_menu,
  starter_id,
  main_course_id,
  dessert_id,
}) => {
  return (
    <div>
      <div className="bg-black h-full w-full">
        <div className="background-menu flex flex-col text-center text-white pt-6">
          <div className="z-10">
            <h1 className="ml-2 font-bold font-titre text-5xl">{label}</h1>
            <p className="mr-3 mb-4 font-bold font-titre text-5xl">
              {price_menu} €
            </p>
          </div>
          <div>
            <h2>Entrée</h2>
            <p className="mr-3">{starter_id}</p>
          </div>
          <div>
            <h2>Plat</h2>
            <p className="mr-3">{main_course_id}</p>
          </div>
          <div>
            <h2>Dessert</h2>
            <p className="mr-3">{dessert_id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProductOfMenuRow;
