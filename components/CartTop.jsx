import React, { useContext } from "react";
import { CartContext } from "@/CartContext/CartContex";
//icons
import { IoCloseOutline } from "react-icons/io5";
import CartBottom from "./CartBottom";

const CartTop = () => {
  const { setIsOpen, isOpen, itemAmount } = useContext(CartContext);
  return (
    <div className="w-full h-20 border-b flex items-center justify-between px-10">
      {/* shopping bag text */}
      <div>Shopping Bag({itemAmount})</div>
      {/* close icon */}
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer group">
        <IoCloseOutline className="text-3xl group-hover:scale-110 duration-300 transition-all" />
      </div>
    </div>
  );
};
export default CartTop;
