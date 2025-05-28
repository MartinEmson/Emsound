"use client";

import React from "react";
import Link from "next/link";
import SpeakerWhite from "../assets/ogspeakerwhite.svg";
import smoothScrollTo from "../utils/smoothScroll";

const FooterContent = () => {
  return (
    <footer className="h-full bg-[#212121] text-white md:mt-[74px] flex justify-center">
      <div className="h-[90vh] w-full flex flex-start flex-col py-6 md:px-12 px-6 gap-8">
        <div className="w-full h-full flex flex-col md:flex-row">
          <nav className="flex-start w-[20vw] order-2 md:order-1">
            <div className="w-1/2 flex flex-col">
              <button
                onClick={() => smoothScrollTo("hem")}
                className="cursor-pointer bg-transparent border-b text-[2rem] text-inherit p-3"
              >
                Hem
              </button>

              <button
                onClick={() => smoothScrollTo("om")}
                className="cursor-pointer bg-transparent border-b text-[2rem] text-inherit p-3"
              >
                Om
              </button>

              <button
                onClick={() => smoothScrollTo("galleri")}
                className="cursor-pointer bg-transparent border-b text-[2rem] text-inherit p-3"
              >
                Galleri
              </button>

              <button
                onClick={() => smoothScrollTo("kontakt")}
                className="cursor-pointer bg-transparent border-b text-[2rem] text-inherit p-3"
              >
                Kontakt
              </button>
            </div>
          </nav>
          <div className="flex-1 flex flex-row justify-end order-1 md:order-2">
            <div className="flex flex-row gap-4 -mr-2">
              <h1 className="font-formula md:text-[9rem] text-[6rem] leading-none translate-y-[0%]">
                EMSOUND
              </h1>
              <SpeakerWhite className="w-full md:h-[110px] h-[75px] translate-y-[3px] -ml-4" />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between mt-auto">
          <div className="flex flex-row">
            <div className="space-y-2">
              <p className="flex items-center">
                <a
                  href="tel:+46123456789"
                  className="hover:text-blue-400 transition-colors"
                >
                  +46 123 456 789
                </a>
              </p>
              <p className="flex items-center">
                <a
                  href="mailto:info@emsound.se"
                  className="hover:text-blue-400 transition-colors"
                >
                  mats@emsound.se
                </a>
              </p>
            </div>
            <div className="mt-4 flex space-x-4">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              ></Link>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col items-end justify-end space-y-2">
              <h3 className="text-xl font-bold">Emsound mm AB</h3>
              <p>&copy; {new Date().getFullYear()} Emsound mm AB. All rights reserved.</p>
          
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
