import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Product({ title, Box1 }) {
  return (
    <div className="product h-[20rem] w-[22rem] flex flex-col py-5">
      <div className="first-div">
        <div className="product-head px-4">
          <h2 className="text-[20px] font-bold">{title}</h2>
        </div>
        <div className="product-items p-4 grid grid-cols-2 gap-3  cursor-pointer">
          {Box1.map((val, index) => (
            <div key={index}>
              <div>
                <img src={val.image} alt="Box-image" className="relative" />
                <div className="cart absolute -mt-24 ml-[7.6rem] hover:ml-[8rem] bg-white text-black p-[1px] -rotate-[18deg] hover:rotate-0 transition-all hover:duration-300 hover:ease-in shadow-lg hover:shadow-md shadow-slate-950">
                  <ShoppingCartOutlinedIcon />
                </div>
              </div>

              <h2 className="text-xs tracking-wide">{val.detail}</h2>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="final-text">
        <h2 className="ml-4 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer">
          {showMore}
        </h2>
      </div> */}
    </div>
  );
}

export default Product;
