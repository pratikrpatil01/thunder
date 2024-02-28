import React from "react";
import Header from "./Components/Header";
import CardComponent from "./Components/Card";
import Homepage from "./Screens/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardScreen from "./Screens/AddtoCard";
import CardDetails from "./Screens/ProductDetails";

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/card" element={<CardScreen />} />
          <Route path="/product/:id" element={<CardDetails />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
