import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { CancionCrear } from "../../componentes/cancion/CancionCrear";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/cancioncre" element={<CancionCrear />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
