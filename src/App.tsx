import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/footer";
import About from "./Pages/about"

const App: React.FC = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/Home" element={<Home />} />
      <Route path="/login" element={<Login />} />
   <Route path="/about" element={<About />} />

    </Routes>
 <Footer />
    </>
  );
};

export default App;
