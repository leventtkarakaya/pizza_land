"use client";
import React, { useState, useEffect, useContext } from "react";

import Image from "next/image";
import { CartContext } from "@/CartContext/CartContex";

const CheckOutDetails = ({ setModal }) => {
  const { cart, setCart, cartTotal } = useContext(CartContext);

  return (
    <div>
      <div className="lg:gap-x-8 h-full lg:px-12 lg:py-2">
        {/* title */}
        <h2>shipping & checkout</h2>
        <div className="h-[86vh] lg:h-[47.5vh] flex flex-col lg:flex-row lg:gap-x-4">
          {/* box1 */}
          <div className="bg-indigo-500 flex-1 h-full overflow-y-auto lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0">
            {/* input wraper */}
            <div className="flex flex-col gap-4 h-full">
              {/* firstname & lastname */}
              <div className="flex-col flex lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
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
              <div className="flex-col flex lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
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
              <div className="flex-col flex lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
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
                  className="textarea w-full h-full"
                  placeholder="Mentions (Optional)"
                ></textarea>
              </div>
            </div>
          </div>
          {/* box2 */}
          <div className="bg-yellow-500 flex-1 h-full lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0">
            box 2
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckOutDetails;
