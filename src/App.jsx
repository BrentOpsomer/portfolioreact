import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "../src/components/Scroll_Naar_Boven";
import Home from "./components/Home";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Navbar from "../src/components/Header";
import "./style/homepage.css";
import "./style/projects.css";
import "./style/contact.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
