import React from "react";

import facebook from "@assets/facebook.png";
import instagram from "@assets/instagram.png";

function Footer() {
  return (
    <div className="flex justify-between items-center bg-black px-8 py-2">
      <div className="font-logo text-orange font-normal">
        Nos réseaux sociaux
      </div>
      <div className="text-white w-[25%] mr-2">
        <ul className="flex flex-row justify-end items-center space-x-4 text-xs mt-1">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://fr-fr.facebook.com/pages/category/Cambodian-Restaurant/Hang-Meas-238012209694265/"
            >
              <img
                src={facebook}
                alt="logo Facebook"
                className="w-[100%] md:w-[70%]"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/hangmeas.paris13/"
            >
              <img
                src={instagram}
                alt="logo Instagram"
                className="w-[100%] md:w-[70%]"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
