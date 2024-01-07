import React from "react";
// import "./Home.css";
import Slider from "./Slider";
import Product from "./Product";

function Home() {
  return (
    <div className="home px-2 bg-[#dcdede]">
      <div className="home-container flex flex-col">
        <Slider />

        <div className="home-row1 flex gap-6 z-[999] m-6">
          <div className="first-item flex flex-col justify-center items-center py-5 mb-2 bg-white">
            <h2 className="text-[22px] font-bold">
              Starts early for Prime members
            </h2>
            <div className="img p-4">
              <img src="/assets/sale.jpg" alt="" className="w-[20rem]" />
            </div>
            <div className="trial">
              <h2 className="-ml-[10rem] text-xs text-[#36919F] hover:text-orange-600 cursor-pointer">Start 30-day Prime FREE trial &gt;</h2>
            </div>
          </div>
          <div className="second-item bg-white py-5 mb-2">
            <Product/>
          </div>
        </div>
        <div className="home-row2"></div>
        <div className="home-row-3"></div>
        <div className="home-row-4"></div>

      </div>
    </div>
  );
}

export default Home;
