"use client";

import React from "react";
import Link from "next/link";
// import Icon from "../assets/icon.jsx";
import Image from "next/image";
import smoothScrollTo from "../utils/smoothScroll";
import Icon from "../assets/Resurs1.svg";

const Navbar = () => {
  return (
    <nav className="z-10 fixed top-0 left-0 w-full border-b border-b-black border-opacity-15 bg-inherit">
      <div className="flex w-full justify-between px-12 py-6">
        <div className="flex w-auto">
          {/* <Link href="/" className="flex flex-row items-center">
            <div className='scale-on-hover justify-center items-center flex'>
                  <Icon alt='Logo' width={25} height={25} className="" style={{ transform: 'scale(0.5)', transformOrigin: 'center' }}  />
      
            </div>
            <h1 className="text-2xl my-auto uppercase">Emsound</h1>
          </Link> */}
          <Link href="/" className="flex flex-row items-center">
            <div className="scale-on-hover flex justify-center items-center">
              <Icon
                width={25}
                height={25}
                style={{ transform: "scale(2)", transformOrigin: "center" }}
              />
            </div>
          </Link>
        </div>
        <div className="flex text-regular items-center">
          {/* Link to top (home) */}
          {/* <Link href="/" className="cursor-pointer ml-6">
            Hem
          </Link> */}

          {/* Smooth scroll buttons instead of hash links */}

          <button
            onClick={() => smoothScrollTo("hem")}
            className="cursor-pointer ml-6 bg-transparent border-none text-inherit"
          >
            Hem
          </button>

          <button
            onClick={() => smoothScrollTo("om")}
            className="cursor-pointer ml-6 bg-transparent border-none text-inherit"
          >
            Om
          </button>

          <button
            onClick={() => smoothScrollTo("galleri")}
            className="cursor-pointer ml-6 bg-transparent border-none text-inherit"
          >
            Galleri
          </button>

          <button
            onClick={() => smoothScrollTo("kontakt")}
            className="cursor-pointer ml-6 bg-transparent border-none text-inherit"
          >
            Kontakt
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
