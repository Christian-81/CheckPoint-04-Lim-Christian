import React from "react";

import Team from "@assets/team.jpg";

function Equipe() {
  return (
    <div className="bg-gray-100 flex flex-col justify-center text-center p-6">
      <h1 className="font-logo bg-orange py-1 text-2xl font-bold">
        L'équipe Hang Meas
      </h1>
      <img
        src={Team}
        alt="La team du restaurant Hang Meas"
        className="rounded-lg mt-6"
      />
    </div>
  );
}

export default Equipe;
