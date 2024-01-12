"use client";

import { CartContext } from "@/CartContext/CartContex";
import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartBottom from "./CartBottom";
import CartTop from "./CartTop";

const CartMobile = () => {
  const { cart, isOpen } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "bottom-0" : "-bottom-full"
      } bg-white fixed w-full h-full left-0 z-20 transition-all duration-300 lg:hidden flex flex-col`}
    >
      {/* top */}
      <CartTop />
      {/* cart items */}
      <div>
        {cart.length > 0 &&
          cart.map((pizza, index) => {
            if (!pizza) return null;
            return <CartItem key={index} />;
          })}
      </div>
      {/* cart bottom */}
      <CartBottom />
    </div>
  );
};
export default CartMobile;
