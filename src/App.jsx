
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
