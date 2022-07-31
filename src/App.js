import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.js";
import Movie from "./Pages/Movie.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:ID" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
