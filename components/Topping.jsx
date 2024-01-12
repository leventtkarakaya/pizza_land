import React, { useState, useEffect } from "react";
// next image
import Image from "next/image";
// icons
import { IoMdCheckmark } from "react-icons/io";

const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
  // checkbox state
  const [isChecked, setIsChecked] = useState(false);
  // handlecheckbox satate fun
  const handleCheckBox = () => {
    setIsChecked((isChecked) => !isChecked);
  };
  // handle topping
  const handleTopping = () => {
    if (isChecked) {
      const newTopping = new Set([...additionalTopping, { ...topping }]);
      setAdditionalTopping(Array.from(newTopping));
      console.log(additionalTopping);
    } else {
      const newTopping = additionalTopping.filter((a) => {
        return a.name !== topping.name;
      });
      setAdditionalTopping(newTopping);
    }
  };
  useEffect(() => {
    handleTopping();
  }, [isChecked]);
  return (
    <div
      className={`${
        isChecked && "border-orange"
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}
    >
      <Image
        src={topping.image}
        width={70}
        height={70}
        alt="
      spice"
        className="mb-2"
      />
      {/* topping name */}
      <div className="text-sm capitalize text-center font-medium">
        {topping.name}
      </div>
      <input
        className="absolute w-full h-full opacity-0 cursor-pointer"
        type="checkbox"
        name=""
        checked={isChecked}
        onChange={handleCheckBox}
      />
      {/* checkbox  icon*/}
      <div
        className={`${
          isChecked ? "opacity-100" : "opacity-0"
        } absolute top-1 right-1`}
      >
        <IoMdCheckmark className="text-xl text-orange" />
      </div>
    </div>
  );
};
export default Topping;
