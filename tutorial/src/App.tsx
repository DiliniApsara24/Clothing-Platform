import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/signup";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
