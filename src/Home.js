import React from "react";
// import "./Home.css";
import Slider from "./Slider";
import Product from "./Product";

function Home() {
  const Box = [
    {
      id: 0,
      image: "/assets/sale.jpg",
    },
  ];
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
      detail: "Clothing",
      image: "/assets/style1.jpg",
    },
    {
      id: 2,
      detail: "Footwear",
      image: "/assets/style2.jpg",
    },
    {
      id: 3,
      detail: "Watches",
      image: "/assets/style3.jpg",
    },
    {
      id: 4,
      detail: "Bags & Wallets",
      image: "/assets/style4.jpg",
    },
  ];
  const Box3 = [
    {
      id: 1,
      detail: "Starting ₹139 | Water bottles",
      image: "/assets/brand1.jpg",
    },
    {
      id: 2,
      detail: "Starting ₹299 | Storage containers",
      image: "/assets/brand2.jpg",
    },
    {
      id: 3,
      detail: "Starting ₹499 | Cookware",
      image: "/assets/brand3.jpg",
    },
    {
      id: 4,
      detail: "Starting ₹399 | Racks & holders",
      image: "/assets/brand4.jpg",
    },
  ];
  const Box4 = [
    {
      id: 1,
      detail: "Spin mops, wipe & more",
      image: "/assets/others1.jpg",
    },
    {
      id: 2,
      detail: "Bathroom handware & accessories",
      image: "/assets/others2.jpg",
    },
    {
      id: 3,
      detail: "Hammers, screwdrivers & more",
      image: "/assets/others3.jpg",
    },
    {
      id: 4,
      detail: "Extension boards, plugs & more",
      image: "/assets/others4.jpg",
    },
  ];

  return (
    <div className="home px-2 bg-[#dcdede] min-h-[200vh]">
      <div className="home-container flex flex-col">
        <Slider />

        <div className="home-row1 flex gap-5 z-10 m-4 -mt-1">
          <div className="first-item flex flex-col justify-center items-center py-2 mb-2 bg-white">
            <h2 className="text-[20px] font-bold -mt-3">
              Starts early for Prime members
            </h2>
            <div className="img p-4 mt-3">
              <img
                src="/assets/sale.jpg"
                alt=""
                className="w-[20rem] cursor-pointer"
              />
            </div>
            <div className="trial">
              <h2 className="-ml-40 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer">
                Start 30-day Prime FREE trial &gt;
              </h2>
            </div>
          </div>
          <div className="second-item bg-white flex flex-col">
            <Product title="Revamp your home in style" Box1={Box1} />
            <div className="final-text -mt-9">
              <h2 className="ml-4 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer">
                Explore more
              </h2>
            </div>
          </div>
          <div className="third-item bg-white">
            <Product
              title="Up to 60% off | Styles for men"
              showMore="End of season sale"
              Box1={Box2}
            />
          </div>
          <div className="fourth-item bg-white">
            <Product title="Starting ₹139 | Amazon brands & more" Box1={Box3} />
          </div>
        </div>
        <div className="home-row2 flex gap-6 z-10 m-4 -mt-1">
          <div className="first-item bg-white">
            <Product
              title="Starting ₹99 | All your home improvement needs"
              showMore="Explore all"
              Box1={Box4}
            />
          </div>
          <div className="second-item bg-white">
            <Product
              title="Starting ₹99 | All your home improvement needs"
              showMore="Explore all"
              Box1={Box4}
            />
          </div>
          <div className="third-item bg-white">
            <Product
              title="Starting ₹99 | All your home improvement needs"
              showMore="Explore all"
              Box1={Box4}
            />
          </div>
          <div className="fourth-item bg-white">
            <Product
              title="Starting ₹99 | All your home improvement needs"
              showMore="Explore all"
              Box1={Box4}
            />
          </div>
        </div>
        <div className="home-row-3"></div>
        <div className="home-row-4"></div>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex itaque odio,
      dicta nihil cum assumenda suscipit ut voluptatibus veniam dolor, quas
      commodi soluta dolorem, voluptatem perferendis? Veritatis repellat, rerum
      minima, saepe dolores suscipit eaque blanditiis dolorum temporibus quia
      molestias perspiciatis eius quos pariatur cupiditate architecto placeat
      fugiat quasi quibusdam iure libero! Necessitatibus, praesentium? Officiis
      necessitatibus iusto, ipsa ipsam praesentium explicabo quos dolores quas
      neque veniam odio sequi temporibus, perferendis eveniet, fuga eos
      aspernatur? Voluptatem dolorum error eveniet molestiae blanditiis hic nam
      quibusdam, consequatur distinctio sit culpa deleniti exercitationem ipsam
      nisi id voluptate fugit nemo ex possimus, ipsa dicta molestias eius
      dolores? Sequi aliquam quibusdam
    </div>
  );
}

export default Home;
