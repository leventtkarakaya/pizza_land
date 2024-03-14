import React, { useContext } from "react";
import { CartContext } from "@/CartContext/CartContex";
//icons
import { IoCloseOutline } from "react-icons/io5";
import CartBottom from "./CartBottom";

const CartTop = () => {
  const { setIsOpen, isOpen, itemAmount } = useContext(CartContext);
  return (
    <div className="flex items-center justify-between w-full h-20 px-10 border-b">
      {/* shopping bag text */}
      <div>Shopping Bag({itemAmount})</div>
      {/* close icon */}
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer group">
        <IoCloseOutline className="text-3xl transition-all duration-300 group-hover:scale-110" />
      </div>
    </div>
  );
};
export default CartTop;
