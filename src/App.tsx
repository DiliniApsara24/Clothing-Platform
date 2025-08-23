import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/LoginPage";
import Navbar from "./Components/Navbar";
import Home from "./Pages/HomePage";
import Footer from "./Components/footer";
import Contact from "./Pages/ContactPage";
import ShopMen from "./Pages/ShopMenPage";
import ShopWomen from "./Pages/ShopWomenPage";
import Children from "./Pages/ChildPage";
import Accessories from "./Pages/AccessoriesPage";
import Shoes from "./Pages/ShoesPage";
import Bag  from "./Pages/BagPage";
import Signup from "./Pages/SignupPage"
import Cart  from "./Pages/CartPage";
import About from "./Pages/AboutPage";




const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/men" element={<ShopMen />} />
        <Route path="/shop/women" element={<ShopWomen />} />
        <Route path="/shop/children" element={<Children />} />
        <Route path="/shop/accessories" element={<Accessories />} />
        <Route path="/shop/shoes" element={<Shoes />} />
        <Route path="/shop/bags" element={<Bag />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/cart" element={<Cart />} />
         
           
      </Routes>
      <Footer />
    </>
  );
};

export default App;
