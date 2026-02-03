import { Routes, Route } from "react-router";
import Home from "./Home.tsx";
import C172 from "./pages/C172.tsx";
import B737_NG_CHN from "./pages/B737_NG_CHN.tsx";
import References from "./pages/References.tsx";

function App() {
  return (
    // Handling frontend routing with React Router
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ref" element={<References />} />
      <Route path="/C172" element={<C172 />} />
      <Route path="/B737_NG_CHN" element={<B737_NG_CHN />} />
    </Routes>
  );
}

export default App;
