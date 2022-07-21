import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-black px-4 py-2">
      <div className="font-logo text-orange font-black">
        <Link to={`/`}>HANG MEAS</Link>
      </div>
      <div className="text-white">
        <ul className="flex flex-row items-center space-x-4 text-xs mt-1">
          <li>
            <Link to={`/`}>La carte</Link>
          </li>
          <li>
            <Link to={`/menu-du-jour`}>Menu du jour</Link>
          </li>
          <li>
            <Link to={`/Equipe`}>L'équipe</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
