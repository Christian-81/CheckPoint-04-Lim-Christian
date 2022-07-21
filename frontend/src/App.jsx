import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListingCarte from "./pages/ListingCarte";
import CarteDetail from "./pages/CarteDetail";
import MenuDuJour from "./pages/MenuDuJour";
import Equipe from "./pages/Equipe";

import Navbar from "@components/Navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListingCarte />} />
          <Route path="/carte/:id" element={<CarteDetail />} />
          <Route path="/menu-du-jour/" element={<MenuDuJour />} />
          <Route path="/equipe/" element={<Equipe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
