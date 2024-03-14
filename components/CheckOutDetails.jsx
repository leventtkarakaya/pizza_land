"use client";
import React, { useState, useEffect, useContext } from "react";

import Image from "next/image";
import { CartContext } from "@/CartContext/CartContex";

const CheckOutDetails = ({ setModal }) => {
  const { cart, setCart, cartTotal } = useContext(CartContext);
  const [successMsg, setSuccessMsg] = useState(false);
  const [count, setCount] = useState(5);

  // counter
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        }
      }, 1000);
      // clear timer
      return () => clearTimeout(timer);
    }
  }, [count, successMsg]);
  // cloese modal after
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg(false);
        //clear cart
        setCart([]);
        // close modal
        setModal(false);
      }, 5000);
      // clear timer
      return () => clearTimeout(timer);
    }
  }, [setCart, setModal, successMsg]);
  return (
    <div>
      {successMsg ? (
        <div className="flex flex-col justify-center items-center h-[100vh] lg:h-[600px] px-6 ">
          <h2 className="text-2xl font-semibold text-center ">
            Thank you! The order has been placed!
          </h2>
          <Image src={"/success-1.gif"} width={150} height={150} alt="" />
          <div>
            This window will close in <span>{count}</span> seconds
          </div>
        </div>
      ) : (
        <div className="h-full lg:gap-x-8 lg:px-12 lg:py-2 ">
          {/* title */}
          <h2 className="pt-6 mb-6 text-xl font-extrabold text-center uppercase lg:text-left lg:pt-0">
            shipping & checkout
          </h2>
          <div className="h-[86vh] lg:h-[65vh] flex flex-col lg:flex-row lg:gap-x-4">
            {/* box1 */}
            <div className="flex-1 h-full px-8 py-4 overflow-y-auto lg:overflow-visible lg:py-0 lg:px-0">
              {/* input wraper */}
              <div className="flex flex-col h-full gap-4">
                {/* firstname & lastname */}
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Last Name"
                  />
                </div>
                {/* phone - email */}
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Email Address"
                  />
                </div>
                {/* street - streen no. */}
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Street Name"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Street No."
                  />
                </div>
                {/* block floor & apartment */}
                <div className="flex justify-between gap-x-4">
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Block"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Floor"
                  />
                  <input
                    type="text"
                    className="w-full input"
                    placeholder="Apt No."
                  />
                </div>
                {/* textarea */}
                <div className="flex-1 h-full">
                  <textarea
                    className="w-full h-[10rem] textarea"
                    placeholder="Mentions (Optional)"
                  ></textarea>
                </div>
              </div>
            </div>
            {/* box2 */}
            <div className="flex-1 h-[46vh] lg:max-w-[50%] flex flex-col justify-between pt-3 px-8 lg:p-0">
              <div className="flex flex-col h-full p-4 mb-4 border rounded-lg">
                <h3 className="pb-4 mb-4 text-base font-semibold uppercase border-b">
                  Your order
                </h3>
                {/* items */}
                <div className="overflow-y-scroll  overflow-hidden scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white-500 font-semibold flex flex-col gap-y-4 h-[240px] py-2">
                  {cart.map((pizza, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between text-[15px]"
                      >
                        <div className="flex gap-x-2">
                          <div className="capitalize">{pizza.name}</div>
                          <div>{pizza.amount > 1 && `x ${pizza.amount}`}</div>
                        </div>
                        <div>
                          $ {parseFloat(pizza.price * pizza.amount).toFixed(2)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* place order btn */}
              <button
                onClick={() => setSuccessMsg(true)}
                className="w-full btn btn-lg gradient"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CheckOutDetails;
