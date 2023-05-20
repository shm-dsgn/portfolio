import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";

function handleMouseMove(e) {
  var cursor = document.querySelector(".cursor");
  let x = e.clientX - cursor.offsetWidth / 2,
    y = e.clientY - cursor.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px)`,
  };

  cursor.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });
}

window.onload = function() {
  console.log("loaded")  //example function call.
}

function App() {
  return (
    <div className="App" onMouseMove={(e) => handleMouseMove(e)}>
      <div className="cursor"></div>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
