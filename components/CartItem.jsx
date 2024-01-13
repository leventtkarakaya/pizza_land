"use client";
import Image from "next/image";
import { BiPlus, BiMinus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

const CartItem = ({ pizza }) => {
  return (
    <div className="select-none relative">
      <div className="flex gap-x-4 mb-2">
        {/* image */}
        <div className="flex justify-center items-center">
          <Image
            src={pizza.image}
            width={90}
            height={90}
            alt="pizza"
            priority={1}
          />
        </div>
        {/* pizza info */}
        <div className="flex flex-col flex-1 gap-y-1">
          {/* name */}
          <div className="text-lg capitalize font-bold">{pizza.name}</div>
          <div className="flex flex-col gap-y-1">
            {/* crus */}
            <div className="capitalize font-medium text-[15px]">
              {pizza.crust} crust
            </div>
            {/* size */}
            <div className="capitalize mb-2 font-medium text-[15px]">
              {pizza.size} size
            </div>
            {/* quality controls */}
            <div className="flex items-center gap-x-1">
              {/* decrease quatity */}
              <div className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full">
                <BiMinus />
              </div>
              {/* pizza amount */}
              <div className="font-semibold flex flex-1 max-w-[30px] justify-center items-center text-sm">
                1
              </div>
              {/* increase quatity */}
              <div className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full">
                <BiPlus />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between absolute right-0 h-[117px]">
          {/* remove item */}
          <div className="text-2xl flex items-center justify-center self-end cursor-pointer hover:scale-110 duration-100 transition-all text-orange">
            <IoCloseOutline />
          </div>
          {/* price */}
          <div className="text-[17px] font-medium font-robotoCondensed">
            <span>${parseFloat(pizza.price * pizza.amount).toFixed(2)}</span>
          </div>
        </div>
      </div>
      {/* toppings */}
      <div className="flex flex-wrap flex-1 items-center gap-3 p-6 border-b border-black/10">
        <div className="font-semibold">
          Toppings :{" "}
          {pizza.additionalTopping.length === 0 && "Terçih Yapılmadı"}
        </div>
        {pizza.additionalTopping.map((topping, index) => {
          return (
            <div
              className="capitalize text-sm gradient font-medium px-3 py-1 rounded-full leading-none"
              key={index}
            >
              {topping.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CartItem;
