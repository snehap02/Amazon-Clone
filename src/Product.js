import React from "react";

function Product({ title, Box1}) {
  return (
    <div className="product h-[22.5rem] w-[22rem] flex flex-col">
      <div className="first-div">
        <div className="product-head px-4">
          <h2 className="text-[20px] font-bold">{title}</h2>
        </div>
        <div className="product-items p-4 grid grid-cols-2 gap-3 -mt-7 cursor-pointer">
          {Box1.map((val, index) => (
            <div key={index}>
              <img src={val.image} alt="" />
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
