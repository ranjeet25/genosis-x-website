import React from "react";
import os1 from "../assets/images/OS-1.svg";
import os2 from "../assets/images/OS-2.svg";

function Cards() {
  return (
    <div>
      <section
        id="Card-section"
        class="flex flex-col md:flex-row md:h-screen mt-10 content-center justify-around items-center "
      >
        <div class="flex justify-center mb-10">
          {/********************* 
             CARD 01 
            ***********************/}
          <div class="rounded-lg border-2 border-slate-200  shadow-lg bg-white max-w-sm w-80 hover:border-emerald-400 ">
            <a href="#!">
              <img class=" p-2   rounded w-36 " src={os1} alt="" />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p class="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>

        {/********************* 
             CARD 02
            ***********************/}

        <div class="flex justify-center mb-10 ">
          <div class="rounded-lg flex flex-col justify-center items-center shadow-lg bg-white max-w-sm w-80 md:w-96 md:ml-6 border-2 border-slate-200 hover:border-emerald-400 ">
            <a href="#!">
              <img class="p-2 shadow-sm rounded w-72" src={os1} alt="" />
            </a>
            <div class="p-6 flex flex-col justify-center items-center ">
              <h5 class="text-gray-900 text-xl font-medium mb-2 ">MOTIVE</h5>
              <p class="text-gray-700 text-sm text-center bg-green-100 border-2 p-2 mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.ome quick example text to build
                on the card title and make up the bulk of the card's content.
              </p>
              <button
                type="button"
                class=" w-full inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>

        {/********************* 
             CARD 03
            ***********************/}
        <div class="flex justify-center mb-10">
          <div class="rounded-lg shadow-lg bg-white max-w-sm w-80 border-2 border-slate-200 hover:border-emerald-400">
            <a href="#!">
              <img class="p-4 rounded w-36" src={os2} alt="" />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p class="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cards;
