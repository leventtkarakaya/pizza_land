"use client";

import React, { useContext } from "react";
//components
import CartItem from "./CartItem";
import CartBottom from "./CartBottom";
import CartTop from "./CartTop";
//context
import { CartContext } from "@/CartContext/CartContex";

const CartDesktop = () => {
  const { isOpen, cart } = useContext(CartContext);
  return <div>CartDesktop</div>;
};
export default CartDesktop;
