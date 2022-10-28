import React from "react";
import { useState } from "react";

function Sublanding1() {
  return (
    <div>
      <section
        id="subheading1"
        className="w-full h-auto md:h-[90vh] bg-black flex flex-col"
      >
        {/*********** THIS IS MAIN BOX1  ******** */}
        <div
          id="box1"
          className=" bg-[#1e1e1f] p-4 w-full h-[80vh] md:h-[90vh] flex flex-col md:flex-row items-center justify-evenly"
        >
          <div id="box1-left" className="md:pl-20  md:w-1/2 ">
            <span className="text-7xl md:text-[6rem]  font-bold text-white">
              Our
            </span>{" "}
            <span className="text-7xl md:text-[8rem] font-bold font-cursive text-[#63FF80] decoration-wavy decoration-4 underline underline-offset-2">
              Motive
            </span>
          </div>

          {/*********** THIS IS RIGHT BOX ******** */}
          <div
            id="box1-right"
            className=" flex flex-col justify-center items-centre w-[100vw] md:w-1/2 h-60  "
          >
            <ul className="p-4 md:pr-20 text-white">
              <li className="bg-[#080808bb] p-4   mt-2 md:mt-2 ">
                <h2 className=" text-[1.4rem] md:text-[1.8rem] font-cursive py-2">
                  Technical Education
                </h2>
                <p className="text-[0.8rem] md:text-[1rem] ">
                  The element to resemble a link, use a button and change it
                  with appropriate styles.appropriate styles.
                </p>
              </li>
            </ul>
            <ul className="p-4 md:pr-20 text-white">
              <li className="bg-[#080808bb] p-4   mt-2 md:mt-2 ">
                <h2 className=" text-[1.4rem] md:text-[1.8rem] font-cursive py-2">
                  Technical Education
                </h2>
                <p className="text-[0.8rem] md:text-[1rem] ">
                  The element to resemble a link, use a button and change it
                  with appropriate styles.appropriate styles.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/*********  MAIN BOX1 ENDS *********/}
      </section>
    </div>
  );
}

export default Sublanding1;
