import React from "react";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <>
      <div className="subtotal bg-white p-6 w-[21rem] h-32">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className="text-xl">
                Subtotal (0 items) :<strong className="text-xl"> 0</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={0}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
        <div className="buy w-full bg-[#eece3e] hover:bg-[#F7CA00] flex justify-center items-center mt-2 py-[7px] rounded-md text-sm font-medium">
            <button className="tracking-wide">Proceed to Buy</button>
        </div>
      </div>
    </>
  );
}

export default Subtotal;
