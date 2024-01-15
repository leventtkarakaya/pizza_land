"use client";

import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CardProvider = ({ children }) => {
  // cart open state
  const [isOpen, setIsOpen] = useState(false);
  // cart state
  const [cart, setCart] = useState([]);
  // cart total state
  const [cartTotal, setCartTotal] = useState(0);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);

  // update item amount
  useEffect(() => {
    const amount = cart.reduce((a, b) => {
      return a + b.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  // update cart total price
  useEffect(() => {
    const price = cart.reduce((a, b) => {
      return a + Number(b.price) * b.amount;
    }, 0);
    setCartTotal(price);
  }, [cart]);

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
    additionalTopping.sort((a, b) => a.name.localeCompare(b.name));
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

    const cartItemIndex = cart.findIndex(
      (item) =>
        item.id === id &&
        item.price === price &&
        item.size === size &&
        item.image === image &&
        JSON.stringify(item.additionalTopping) ===
          JSON.stringify(additionalTopping) &&
        item.crust === crust
    );

    if (cartItemIndex === -1) {
      setCart([...cart, newItem]);
    } else {
      const newCart = [...cart];
      newCart[cartItemIndex].amount += 1;
      setCart(newCart);
    }
    // open cart
    setIsOpen(true);
  };
  // remove item cart
  const removeItem = (id, price, crust) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.price === price && item.crust === crust
    );
    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(itemIndex, 1);
      setCart(newCart);
    }
  };
  // increase Amount
  const increaseAmount = (id, price) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.price === price
    );
    if (itemIndex !== -1) {
      const newItem = [...cart];
      newItem[itemIndex].amount += 1;
      setCart(newItem);
    }
  };
  // decrease Amount
  const decraseAmount = (id, price) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.price === price
    );
    if (itemIndex !== -1) {
      const newItem = [...cart];
      if (newItem[itemIndex].amount > 1) {
        newItem[itemIndex].amount -= 1;
      }
      setCart(newItem);
    }
  };
  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        setCart,
        removeItem,
        increaseAmount,
        decraseAmount,
        itemAmount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CardProvider;
