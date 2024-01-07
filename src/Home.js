import React from "react";
// import "./Home.css";
import Slider from "./Slider";
import Product from "./Product";

function Home() {
  const Box1 = [
    {
      id: 1,
      detail: "Cushion covers, bedsheets & more",
      image: "/assets/home1.jpg",
    },
    {
      id: 2,
      detail: "Vases, decor and more",
      image: "/assets/home2.jpg",
    },
    {
      id: 3,
      detail: "Home storage",
      image: "/assets/home3.jpg",
    },
    {
      id: 4,
      detail: "Lighting solutions",
      image: "/assets/home4.jpg",
    },
  ];
  const Box2 = [
    {
      id: 1,
      detail: "Cushion covers, bedsheets & more",
      image: "/assets/home1.jpg",
    },
    {
      id: 2,
      detail: "Vases, decor and more",
      image: "/assets/home2.jpg",
    },
    {
      id: 3,
      detail: "Home storage",
      image: "/assets/home3.jpg",
    },
    {
      id: 4,
      detail: "Lighting solutions",
      image: "/assets/home4.jpg",
    },
  ];
  return (
    <div className="home px-2 bg-[#dcdede]">
      <div className="home-container flex flex-col">
        <Slider />

        <div className="home-row1 flex gap-6 z-[999] m-6 -mt-1">
          <div className="first-item flex flex-col justify-center items-center py-2 mb-2 bg-white h-96">
            <h2 className="text-[20px] font-bold -mt-3">
              Starts early for Prime members
            </h2>
            <div className="img p-4">
              <img
                src="/assets/sale.jpg"
                alt=""
                className="w-[20rem] cursor-pointer"
              />
            </div>
            <div className="trial">
              <h2 className="-ml-32 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer">
                Start 30-day Prime FREE trial &gt;
              </h2>
            </div>
          </div>
          <div className="second-item bg-white py-5 mb-2">
            <Product
              title="Revamp your home in style"
              showMore="Explore all"
              Box1={Box1}
            />
          </div>
          <div className="third-item bg-white py-5 mb-2">
            <Product title="Up to 60% off | Styles for men"
              showMore="End of season sale"
              Box1={Box2}/>
          </div>
          <div className="fourth-item bg-white py-5 mb-2">
            {/* <Product /> */}
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
