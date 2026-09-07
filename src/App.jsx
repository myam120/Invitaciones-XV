import { Routes, Route } from "react-router-dom";

import Invitacion from "./pages/Invitacion";
import NotFound from "./components/completa/NotFound";

function App() {
  return (
    <Routes>

      {/* INVITACIONES */}
      <Route
        path="/invitacion/:slug"
        element={<Invitacion />}
      />

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default App;