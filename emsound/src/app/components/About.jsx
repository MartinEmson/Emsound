import Nexo from "../assets/nexo.svg";
import Sennheiser from "../assets/sennheiser.svg";
import Yamaha from "../assets/yamaha.svg";
import Shure from "../assets/shure.svg";
import React from "react";


export default function About() {
  return (
    <section id="om" className="bg-[#212121] px-6 md:px-12 py-12">

{/* <h1 className='font-formula p-6 text-[6rem] text-white'>Om</h1> */}

      <div className="min-h-screen flex flex-col">
      <h1 className='font-formula md:text-[6rem] text-[4rem] text-[#fff]'>Om</h1>
      <div className="flex justify-center items-center">
        <div className="w-full md:w-4/6 flex flex-col">
          <p className="md:mt-0 mt-3 md:text-[3rem] text-[2.5rem] text-[#fff]">
            Emsound drivs av Mats Lindevall och har varit aktivt i mer än 30 år.
          </p>

          <p className="mt-12 md:text-[3rem] text-[2.5rem] text-[#fff] ">
            Vi levererar ljudtekniska tjänster och teknik från bl.a Nexo,
            Yamaha, Shure och Sennheiser.
          </p>
          </div>
          {/* <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
            <div className="w-64 h-64 flex items-center justify-center">
              <Nexo className="max-w-full max-h-full" />
            </div>
            <div className="w-96 h-64 flex items-center justify-center">
              <Sennheiser className="max-w-full max-h-full" />
            </div>
            <div className="w-64 h-64 flex items-center justify-center">
              <Yamaha className="max-w-full max-h-full" />
            </div>
            <div className="w-64 h-64 flex items-center justify-center">
              <Shure className="max-w-full max-h-full" />
            </div>
        
        </div> */}
      </div>
      </div>
    </section>
  );
}
