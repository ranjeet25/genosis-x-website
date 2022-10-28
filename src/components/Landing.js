import React from "react";
import main from "../assets/images/main.svg";

function Hero() {
  return (
    <div className="Hero-main">
      <section
        id="Landing-section"
        class=" h-screen flex flex-col justify-center  md:justify-evenly items-center  md:flex-row w-full md:h-screen bg-black"
      >
        {/********************* 
             RIGHT DIV BOX CONTENT main color :#63FF80
            ***********************/}
        <img
          src={main}
          class=" mt-16 md:mt-4 animate-spin-slow w-60 md:w-[50vh] md:hidden"
        ></img>

        <div class="mt-4 md:m-5 md:h-96  flex flex-col justify-center items-centre md:items-start ">
          <span class="text-7xl  md:text-[8rem] font-bold  text-center text-white">
            Genosis{" "}
            <span class="text-7xl  md:text-[8rem] font-bold  text-center text-[#63FF80]">
              X
            </span>
          </span>

          <span class="text-2xl ml-0 md:ml-4 mt-4 md:text-4xl font-bold font-poppins text-center text-white">
            Community
          </span>

          <button
            type="button"
            class=" animate-bounce md:w-72 px-20 ml-2 md:px-6 md:mr-6 py-3 mt-10 focus:ring-2 ring-slate-400 bg-white cursor-pointer border-2 border-slate-300 rounded-3xl shadow-sm hover:shadow-lg"
          >
            <span class="mr-1">
              <ion-icon name="person-add-outline"></ion-icon>
            </span>{" "}
            Join Us now
          </button>
        </div>
        <img
          src={main}
          class=" mt-16 md:mt-4 animate-spin-slow w-60 md:w-[50vh] hidden md:block"
        ></img>
      </section>
    </div>
  );
}

export default Hero;
