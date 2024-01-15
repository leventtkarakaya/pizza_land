"use client";

// next ımage
import Image from "next/image";
// parallax
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
const Banner = () => {
  return (
    <section className="bg-primary bg-pattern lg:min-h-[768px] pt-16 lg:pt-16 ">
      <div className="container mx-auto min-h-[768px] flex items-center justify-center">
        <MouseParallaxContainer
          globalFactorX={0.2}
          globalFactorY={0.2}
          resetOnLeave
          className="w-full flex flex-col lg:flex-row justify-between items-center"
        >
          {/* text */}
          <MouseParallaxChild factorX={0.2} factorY={0.2}>
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6 text-white">
              <div>
                <div className="font-bangers text-[32px] text-white uppercase tracking-[0.03em]">
                  Best pizza in town
                </div>
                <h1 className="text-6xl font-bangers lg:text-8xl drop-shadow-md">
                  Pizza perfection <br />
                  in very bite
                </h1>
              </div>
            </div>
          </MouseParallaxChild>
          {/* image */}
          <MouseParallaxChild factorX={0.2} factorY={0.2} className="relative">
            {/* pizza  image */}
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6">
              <div className="flex flex-1 justify-end max-w-sm lg:max-w-max">
                <Image
                  src={"/pizza-banner.png"}
                  width={550}
                  height={558}
                  alt="pizza"
                  priority={1}
                />
              </div>
            </div>
            {/* chill-1 image */}
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className="absolute top-6 left-4 hidden lg:flex"
            >
              <Image
                src={"/chilli-1.png"}
                width={160}
                height={84}
                alt="chilli"
                priority={1}
                quality={100}
              />
            </MouseParallaxChild>
            {/* chill-2 image */}
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className="absolute top-16 -left-4 hidden lg:flex"
            >
              <Image
                src={"/chilli-2.png"}
                width={130}
                height={84}
                alt="chilli"
                priority={1}
                quality={100}
              />
            </MouseParallaxChild>
            {/* garlic-1 image */}
            <MouseParallaxChild
              factorX={0.4}
              factorY={0.4}
              className="absolute top-80 -left-24 hidden lg:flex"
            >
              <Image
                src={"/garlic-1.png"}
                width={84}
                height={72}
                alt="garlic"
                priority={1}
                quality={100}
              />
            </MouseParallaxChild>
            {/* garlic-2 image */}
            <MouseParallaxChild
              factorX={0.4}
              factorY={0.4}
              className="absolute top-[22rem] -left-8 hidden lg:flex"
            >
              <Image
                src={"/garlic-2.png"}
                width={100}
                height={72}
                alt="garlic"
                priority={1}
                quality={100}
              />
            </MouseParallaxChild>
            {/* garlic-3 image */}
            <MouseParallaxChild
              factorX={0.4}
              factorY={0.4}
              className="absolute top-96 -left-20 hidden lg:flex"
            >
              <Image
                src={"/garlic-3.png"}
                width={100}
                height={72}
                alt="garlic"
                priority={1}
                quality={100}
              />
            </MouseParallaxChild>
            {/* leaves image */}
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.3}
              className="absolute top-96 left-12   hidden lg:flex"
            >
              <Image
                src={"/leaves.png"}
                width={180}
                height={72}
                alt="garlic"
                priority={1}
                quality={100}
              />
            </MouseParallaxChild>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};
export default Banner;
