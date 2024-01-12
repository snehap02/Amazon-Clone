import React from "react";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <>
      <div className="checkoutpage bg-[#dcdede] px-5 pt-7 flex gap-4">
        <div className="shopping-cart bg-white p-6 w-full">
          <h1 className="text-3xl">Shopping Cart</h1>
          <div className="line bg-neutral-300 w-full h-[1px] mt-8"></div>
          <div className="cart-details"></div>
        </div>
        <div className="subTotal">
          <Subtotal/>
        </div>
      </div>
    </>
  );
}

export default Checkout;
