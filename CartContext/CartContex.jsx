"use client";

import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CardProvider = ({ children }) => {
  // cart open state
  const [isOpen, setIsOpen] = useState(false);
  // cart state
  const [cart, setCart] = useState([]);
  // add top cart
  const addToCart = (
    id,
    image,
    name,
    price,
    additionalTopping,
    size,
    crust
  ) => {
    // add cart additionalTopping array by name
    const sortedToppings = additionalTopping.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    console.log(sortedToppings);
    const newItem = {
      id,
      image,
      name,
      price,
      additionalTopping,
      size,
      crust,
      amount: 1,
    };
    console.log(newItem);
  };
  return (
    <CartContext.Provider
      value={{ isOpen, setIsOpen, addToCart, cart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CardProvider;
