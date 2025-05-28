import React from "react";
import Link from "next/link";
import Icon from "../assets/icon.svg";
import Image from "next/image";
import Speaker from "../assets/ogspeaker.svg";

const Hero = () => {
  return (
    <section id="hem" className="flex min-h-screen w-full p-6">
      <div className="justify-center items-center w-full flex">
        <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center">
          <h1 className="font-formula text-[6rem] md:text-[12rem] leading-none translate-y-[10%]">
            EMSOUND
          </h1>
          </div>
          <Speaker className="w-full h-[76px] md:h-[154px] translate-y-[0px] -ml-4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
