import React from "react";
import "./App.css";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <div className="app w-full min-h-[100vh]">
      <Header />
      <SubHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
