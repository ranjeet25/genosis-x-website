import React from "react";
import reg_bg from "../assets/images/registration.svg";

function Member_registration() {
  return (
    <div>
      <section
        id="member_registration "
        class="w-screen h-screen flex  justify-center items-center "
      >
        <div id="Left-section">
          <img class="md:w-96 md:h-96 " src={reg_bg}></img>
        </div>
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm md:w-96 ">
          {/********************* 
             FORM STARTS 
            ***********************/}
          <form action="http://localhost:4000/register" method="POST">
            {/********************* 
             LABEL 1 NAME 
            ***********************/}
            <div class="form-group mb-6">
              <input
                type="text"
                name="name"
                class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none"
                id="exampleInputEmail1"
                placeholder="Enter Name"
              ></input>
            </div>

            {/********************* 
             LABEL 2 Email 
            ***********************/}
            <div class="form-group mb-6">
              <input
                type="text"
                name="email"
                class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none"
                id="exampleInputEmail1"
                placeholder="Enter Email"
              ></input>
              <small
                id="emailHelp"
                class="block mt-1 text-xs text-gray-600 ml-2"
              >
                We'll never share your email with anyone else.
              </small>
            </div>
            {/********************* 
             LABEL 3 Field of study 
            ***********************/}
            <div class="form-group mb-6">
              <input
                type="text"
                name="field"
                class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none"
                id="exampleInputEmail1"
                placeholder="Field of study "
              ></input>
            </div>
            {/********************* 
             LABEL 4 College 
            ***********************/}
            <div class="form-group mb-6">
              <input
                type="text"
                name="college"
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none"
                id="exampleInputPassword1"
                placeholder="College"
              ></input>
            </div>
            {/********************* 
             LABEL 4 Yaer of graduation 
            ***********************/}
            <div class="form-group mb-6">
              <input
                type="text"
                name="gyear"
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none"
                id="exampleInputPassword1"
                placeholder="Year of Graduation"
              ></input>
            </div>

            {/********************* 
             Text area
            ***********************/}
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label inline-block mb-2 text-gray-700"
                >
                  <small class="ml-2">
                    Why do you want to join our community ?
                  </small>
                </label>
                <textarea
                  name="message"
                  class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none
      "
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>

            {/********************* 
             SUBMIT BUTTON
            ***********************/}
            <button
              type="submit"
              class="
      px-6
      py-2.5
      bg-green-400
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-green-500 hover:shadow-lg
      focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-green-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Member_registration;
