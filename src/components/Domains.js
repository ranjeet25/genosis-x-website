import React from "react";
import os1 from "../assets/images/OS-1.svg";
import os2 from "../assets/images/OS-2.svg";

function Domains() {
  return (
    <div className="h-[auto] md:h-[100vh] flex flex-col  items-centre justify-around bg-black ">
      <div id="box1-left" className="md:pl-20  md:w-auto p-12">
        <span className="text-3xl md:text-[5rem]  font-bold text-white">
          Focused
        </span>{" "}
        <span className="text-7xl md:text-[8rem] font-bold font-cursive text-[#63FF80] decoration-wavy decoration-4 underline underline-offset-2">
          Domains
        </span>
      </div>
      <section
        id="domains-cards"
        className="flex flex-col md:flex-row justify-center items-center justify-around"
      >
        {/************  BOX 01 ***********/}
        <div class="rounded-lg border-2 border-slate-200  shadow-lg bg-[#0e0e10] max-w-sm w-80 hover:border-emerald-400 mt-4">
          <a href="#!">
            <img class=" p-2   rounded w-36 " src={os1} alt="" />
          </a>
          <div class="p-6">
            <h5 class="text-white text-[1.6rem] font-medium mb-2 font-cursive">
              Web Development
            </h5>
            <p class="text-white text-base mb-4 text-[0.8rem]">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 border text-white  hover:text-black hover:bg-white font-medium text-xs  uppercase rounded shadow-md  transition duration-150 ease-in-out"
            >
              Comming soon
            </button>
          </div>
        </div>

        {/************  BOX 02***********/}
        <div class="rounded-lg border-2 border-slate-200  shadow-lg bg-[#0e0e10] max-w-sm w-80 hover:border-emerald-400 mt-4">
          <a href="#!">
            <img class=" p-2   rounded w-36 " src={os1} alt="" />
          </a>
          <div class="p-6">
            <h5 class="text-white text-[1.6rem] font-medium mb-2 font-cursive">
              Machine Learning
            </h5>
            <p class="text-white text-base mb-4 text-[0.8rem]">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 border text-white  hover:text-black hover:bg-white font-medium text-xs  uppercase rounded shadow-md  transition duration-150 ease-in-out"
            >
              Comming soon
            </button>
          </div>
        </div>
        {/************  BOX 03 ***********/}

        <div class="mb-8 rounded-lg border-2 border-slate-200  shadow-lg bg-[#0e0e10] max-w-sm w-80 hover:border-emerald-400 mt-4">
          <a href="#!">
            <img class=" p-2   rounded w-36 " src={os1} alt="" />
          </a>
          <div class="p-6">
            <h5 class="text-white text-[1.6rem] font-medium mb-2 font-cursive">
              Data Science
            </h5>
            <p class="text-white text-base mb-4 text-[0.8rem]">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 border text-white  hover:text-black hover:bg-white font-medium text-xs  uppercase rounded shadow-md  transition duration-150 ease-in-out"
            >
              Comming soon
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Domains;
