import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
