import React from "react";
import { discount, robot, smart } from "../assets";
import style from "../style";
import styles from "../style";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span >Safety Meets Style: Introducing LaRing !</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Empower Your Safety with <br className="sm:block hidden" />{" "}
            <span
    style={{
      background: 'linear-gradient(to right, #bd8b46, #ffffff)', // Change #ffffff to your desired end color
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >LaRing</span>{" "}
          </h1>
          
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Discover the ultimate in personal security with the LaRing smart ring.
        Discreet emergency alerts, location-tracking, and chemical detection all in
        one sleek design.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={smart}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  );
};

export default Hero;
