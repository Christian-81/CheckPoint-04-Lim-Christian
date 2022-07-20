import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";


import "./App.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Carte />} />
        <Route path="/carte/:id" element={<CarteDetail />} />
        <Route path="/menu-du-jour/" element={<MenuDuJour />} />
        <Route path="/equipe/" element={<Equipe />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
