import React from "react";

function Product({ title, Box1, showMore }) {
  return (
    <div className="product h-80 w-[22rem]">
      <div className="product-head py-5 mb-2 px-4">
        <h2 className="text-[20px] font-bold -mt-3">{title}</h2>
      </div>
      <div className="product-items p-4 grid grid-cols-2 gap-3 -mt-7 cursor-pointer">
        {Box1.map((val, index) => (
          <div key={index}>
            <img src={val.image} alt="" />
            <h2 className="text-xs tracking-wide">{val.detail}</h2>
          </div>
        ))}
      </div>
      <div className="final-text">
        <h2 className="ml-4 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer">
          {showMore}
        </h2>
      </div>
    </div>
  );
}

export default Product;
