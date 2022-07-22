import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListingCarte from "./pages/ListingCarte";
import CarteDetail from "./pages/CarteDetail";
import MenuDuJour from "./pages/MenuDuJour";
import Equipe from "./pages/Equipe";
import Admin from "./pages/Admin";


import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListingCarte />} />
          <Route path="/products/:id" element={<CarteDetail />} />
          <Route path="/menu-du-jour/" element={<MenuDuJour />} />
          <Route path="/equipe/" element={<Equipe />} />
          <Route path="/createproduct" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
