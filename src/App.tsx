import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Apod from "./components/Apod/Apod";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apod" element={<Apod />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
