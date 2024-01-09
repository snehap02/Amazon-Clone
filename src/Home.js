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
  const Box5 = [
    {
      id: 1,
      detail: "Budget TVs | Up to 60%",
      image: "/assets/tv1.jpg",
    },
    {
      id: 2,
      detail: "4K TVs | Up to 24 months No Cost EMI",
      image: "/assets/tv2.jpg",
    },
    {
      id: 3,
      detail: "Big Screens | Up to 60% off",
      image: "/assets/tv3.jpg",
    },
    {
      id: 4,
      detail: "Ultra Premium TVs | Up to 50% off",
      image: "/assets/tv4.jpg",
    },
  ];
  const Box6 = [
    {
      id: 1,
      detail: "Up to 75% off | boAt",
      image: "/assets/headphone11.jpg",
    },
    {
      id: 2,
      detail: "Up to 75% off | boult",
      image: "/assets/headphone2.jpg",
    },
    {
      id: 3,
      detail: "Up to 75% off | Noise",
      image: "/assets/headphone3.jpg",
    },
    {
      id: 4,
      detail: "Up to 75% off | Zebronic",
      image: "/assets/headphone4.jpg",
    },
  ];
  const Box7 = [
    {
      id: 1,
      detail: "Air conditioners",
      image: "/assets/app1.jpg",
    },
    {
      id: 2,
      detail: "Refregirators",
      image: "/assets/app2.jpg",
    },
    {
      id: 3,
      detail: "Microwaves",
      image: "/assets/app3.jpg",
    },
    {
      id: 4,
      detail: "Washing machines",
      image: "/assets/app4.jpg",
    },
  ];
  const Box8 = [
    {
      id: 1,
      detail: "Sports shoes",
      image: "/assets/bestsell1.jpg",
    },
    {
      id: 2,
      detail: "Jewellery & accessories",
      image: "/assets/bestsell2.jpeg",
    },
    {
      id: 3,
      detail: "Watches & smartwatches",
      image: "/assets/bestsell3.jpeg",
    },
    {
      id: 4,
      detail: "Bags, wallets & luggage",
      image: "/assets/bestsell4.jpeg",
    },
  ];
  const Box9 = [
    {
      id: 1,
      detail: "Gift for men",
      image: "/assets/birthday1.jpg",
    },
    {
      id: 2,
      detail: "Gift for women",
      image: "/assets/birthday2.jpg",
    },
    {
      id: 3,
      detail: "Gift for boys",
      image: "/assets/birthday3.jpg",
    },
    {
      id: 4,
      detail: "Gift for girls",
      image: "/assets/birthday4.jpg",
    },
  ];
  const Box10 = [
    {
      id: 1,
      detail: "Allen Solly, Fort Collins & more",
      image: "/assets/styling1.jpg",
    },
    {
      id: 2,
      detail: "Biba, Aurelia & more",
      image: "/assets/styling2.jpg",
    },
    {
      id: 3,
      detail: "Womanist, Mimosa & more",
      image: "/assets/styling3.jpg",
    },
    {
      id: 4,
      detail: "Harpa, Only & more",
      image: "/assets/styling4.jpg",
    },
  ];
  const img = [
    {
      id: 1,
      image: "/assets/slide0.jpg",
    },
    {
      id: 2,
      image: "/assets/slide1.jpg",
    },
    {
      id: 3,
      image: "/assets/slide2.jpg",
    },
    {
      id: 4,
      image: "/assets/slide4.jpg",
    },
    {
      id: 5,
      image: "/assets/slide5.jpg",
    },
    {
      id: 6,
      image: "/assets/slide6.jpg",
    },
    {
      id: 7,
      image: "/assets/slide7.jpg",
    },
    {
      id: 8,
      image: "/assets/slide8.jpg",
    },
    {
      id: 9,
      image: "/assets/slide9.jpg",
    },
    {
      id: 10,
      image: "/assets/slide10.jpg",
    },
    {
      id: 11,
      image: "/assets/slide12.jpg",
    },
    {
      id: 12,
      image: "/assets/slide13.jpg",
    },
    {
      id: 13,
      image: "/assets/slide14.jpg",
    },
  ];
  return (
    <div className="home px-2 bg-[#dcdede] min-h-[256vh]">
      <div className="home-container flex flex-col">
        <Slider />

        <div className="home-row1 flex gap-5 z-10 m-4 -mt-1">
          <div className="first-item flex flex-col justify-center items-center bg-white py-5">
            <h2 className="text-[20px] font-bold -ml-6">
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
            <div className="final-text">
              <h2 className="ml-4 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer mt-7">
                Explore more
              </h2>
            </div>
          </div>
          <div className="third-item bg-white flex flex-col">
            <Product title="Up to 60% off | Styles for men" Box1={Box2} />
            <h2 className="ml-4 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer mt-7">
              End of season sale
            </h2>
          </div>
          <div className="fourth-item bg-white">
            <Product title="Starting ₹139 | Amazon brands & more" Box1={Box3} />
          </div>
        </div>
        <div className="home-row2 flex gap-5 z-10 m-4 -mt-1">
          <div className="first-item bg-white flex flex-col h-[26rem]">
            <Product
              title="Starting ₹99 | All your home improvement needs"
              Box1={Box4}
            />
            <h2 className="ml-4 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer mt-14">
              Explore all
            </h2>
          </div>
          <div className="second-item bg-white flex flex-col">
            <Product
              title="Get the perfect screen size | TVs Starting ₹6,999"
              Box1={Box5}
            />
            <h2 className="ml-4 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer mt-14">
              See all offers
            </h2>
          </div>
          <div className="third-item bg-white flex flex-col">
            <Product title="Up to 75% off | Headphones" Box1={Box6} />
            <h2 className="ml-4 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer mt-14">
              See all offers
            </h2>
          </div>
          <div className="fourth-item bg-white flex flex-col">
            <Product
              title="Appliances for your home | Up to 55% off"
              Box1={Box7}
            />
            <h2 className="ml-4 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer mt-14">
              See more
            </h2>
          </div>
        </div>
        <div className="home-row-3 bg-white s-full h-[17rem] mx-4 px-3 py-2 flex flex-col gap-2 overflow-x-hidden">
          <h2 className="text-[22px] font-bold">
            Up to 50% off | Elevate your audio aesthetic with headphones and
            earphones{" "}
            <span className="text-xs text-[#36919F] hover:text-orange-600 cursor-pointer ml-5 hover:underline underline-offset-1">
              See all offers
            </span>
          </h2>
          <div className="images flex overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-gray-100 scrollbar-thumb-rounded-full">
            {img.map((val, index) => (
              <div key={index} className="min-w-64 flex justify-center mb-2">
                <img src={val.image} className="min-w-20 object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="home-row4 flex gap-5 z-10 m-4">
          <div className="first-item bg-white flex flex-col h-[26rem]">
            <Product
              title="Bestsellers | Shoes, jewellery & more"
              Box1={Box8}
            />
            <h2 className="ml-4 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer mt-14">
              See all offers
            </h2>
          </div>
          <div className="second-item bg-white flex flex-col">
            <Product
              title="Birthday store"
              Box1={Box9}
            />
            <h2 className="ml-4 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer mt-14">
              See more
            </h2>
          </div>
          <div className="third-item bg-white flex flex-col px-4 w-full">
          <h2 className="text-[20px] font-bold mt-5">Starting ₹99 | Indoor plants</h2>
          <div className="flex justify-center">
          <img src="/assets/plant.jpg" alt=""  className="mt-4 w-[19.5rem]"/>
          </div>
            <h2 className="text-xs text-[#36919F] hover:text-orange-600 cursor-pointer mt-5">
              See more
            </h2>
          </div>
          <div className="fourth-item bg-white flex flex-col w-full px-3">
          <Product
              title="Minimum 50% off | Top styles for her"
              Box1={Box10}
            />
            <h2 className="ml-4 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer mt-14">
              See all details
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
