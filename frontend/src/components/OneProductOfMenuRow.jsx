import React from "react";

import "../App.css";

function OneProductOfMenuRow({ productOfMenu }) {
  return (
    <div>
      <div className="h-full w-full">
        <div className="background-menu flex flex-col text-center text-white pt-6">
          <div className="rounded-lg mx-auto p-6">
            <div>
              <h1 className="ml-2 font-bold font-titre text-5xl text-orange">
                {productOfMenu.label}
              </h1>
              <p className="mr-3 mb-9 font-bold font-titre text-5xl text-orange">
                {productOfMenu.price_menu} €
              </p>
            </div>
            <div>
              <h2 className="text-xl font-titre -mb-2 text-orange">Entrée</h2>
              <p className="text-3xl font-titre mb-4">
                {productOfMenu.start_title}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-titre -mb-3 text-orange">Plat</h2>
              <p className="text-3xl font-titre mb-4">
                {productOfMenu.main_course}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-titre -mb-3 text-orange">Dessert</h2>
              <p className="text-3xl font-titre mb-4">
                {productOfMenu.dessert}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneProductOfMenuRow;
