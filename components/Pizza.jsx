"use client";

import React, { useState } from "react";
// image
import Image from "next/image";
// modal
import Modal from "react-modal";
// components
import PizzaDetails from "./PizzaDetails";
// icons
import { IoCloseOutline } from "react-icons/io5";
// Bind modal to body
Modal.setAppElement("body");
// modal style
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const Pizza = ({ pizza }) => {
  // modal state
  const [modal, setModal] = useState(false);
  // open & close modal
  const openModal = () => {
    setModal((modal) => !modal);
  };
  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
      <Image
        onClick={openModal}
        width={270}
        height={270}
        alt="pizza"
        priority={1}
        src={pizza.image}
        className="lg:group-hover:translate-y-3 duration-300 transition-all mb-8"
      />
      {/* title */}
      <div onClick={openModal}>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      {/* descriptions */}
      <div className="text-sm font-medium min-h-[60px] mb-6 ">
        {pizza.description}
      </div>
      {/* price & btn */}
      <div className="mb-6 flex items-center justify-between">
        {/* price => hidden (sm) - visible (lg) */}
        <div className="hidden lg:flex text-xl font-semibold">
          starts at {pizza.priceSm}
        </div>
        {/* btn => hidden (sm) - visible (lg) */}
        <button
          onClick={openModal}
          className="hidden-btn lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
        >
          Choose
        </button>
        {/* btn => visible (sm) - hidden (lg) */}
        <button
          onClick={openModal}
          className="btn btn-sm gradient lg:hidden text-sm  px-3"
        >
          Start at {pizza.priceSm}
        </button>
      </div>
      {/* modal */}
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={openModal}
          contentLabel="Pizza Modal"
          className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-y-[-50%] lg:translate-x-[-50%] outline-none"
        >
          {/* close modal icons */}
          <div
            className="absolute right-2 top-2 z-30 hover:scale-110 cursor-pointer duration-200  "
            onClick={openModal}
          >
            <IoCloseOutline className="text-4xl text-orange" />
          </div>
          {/* pizza details */}
          <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};
export default Pizza;
