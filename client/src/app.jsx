import "./app.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Elegance from "./pages/elegance";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/elegant" element={<Elegance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
