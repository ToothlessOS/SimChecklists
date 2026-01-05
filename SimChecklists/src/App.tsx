import { Routes, Route } from "react-router";
import Home from "./Home.tsx";

function App() {
  return (
    // Handling frontend routing with React Router
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
