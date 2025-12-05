
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/LandingPage" element={<LandingPage />} />
      </Routes>

      <Footer />
    </>
  );
}
