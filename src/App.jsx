import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hom from "./pages/Hom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Hom />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
