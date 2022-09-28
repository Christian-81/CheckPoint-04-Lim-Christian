import React from "react";
import { Carousel } from "flowbite-react";

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
                {productOfMenu.main_course_title}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-titre -mb-3 text-orange">Dessert</h2>
              <p className="text-3xl font-titre mb-4">
                {productOfMenu.dessert_title}
              </p>
            </div>
          </div>
          {/* CAROUSEL */}
          <div className="w-[95%] mx-auto rounded-2xl h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000}>
              <img
                src={productOfMenu.start_img}
                alt={productOfMenu.start_title}
              />
              <img
                src={productOfMenu.main_course_img}
                alt={productOfMenu.main_course_title}
              />
              <img
                src={productOfMenu.dessert_img}
                alt={productOfMenu.dessert_title}
              />
            </Carousel>
          </div>
          {/* FIN CAROUSEL */}
        </div>
      </div>
    </div>
  );
}

export default OneProductOfMenuRow;
