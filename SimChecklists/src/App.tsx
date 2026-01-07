import { Routes, Route } from "react-router";
import Home from "./Home.tsx";
import C172 from "./pages/C172.tsx";

function App() {
  return (
    // Handling frontend routing with React Router
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/C172" element={<C172 />} />
    </Routes>
  );
}

export default App;
