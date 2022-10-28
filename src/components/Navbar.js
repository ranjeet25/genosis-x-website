import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div id="Navbar-section">
      {/* This is the Container for Navbar */}

      <div class=" z-10 fixed  shadow-lg container mx-auto flex flex-wrap md:p-5  flex-col md:flex-row items-center md:fixed md:top-0 md:left-0 md:right-0 bg-white ">
        <a class="flex title-font font-medium items-center text-black-400 mb-4 md:mb-0  ">
          <span class="text-xl hidden md:block">Genosis X Community</span>
        </a>
        <button class="md:hidden " type="button" onClick={handleNav}>
          {!nav ? (
            <ion-icon size="large" name="menu-outline"></ion-icon>
          ) : (
            <ion-icon size="large" name="close-outline"></ion-icon>
          )}
        </button>

        <nav
          id="nav"
          class={
            !nav
              ? " hidden md:mr-auto md:ml-4 md:flex-row md:flex md:py-1 md:pl-16 ease-in-out duration-300"
              : " flex flex-col h-[100vh]"
          }
        >
          <a class=" px-24 md:px-6 md:mr-6 py-2 mt-4 cursor-pointer border-2 border-slate-200 rounded-3xl shadow-sm hover:shadow-lg">
            <ion-icon name="home-outline"></ion-icon> <Link to="/"> Home</Link>
          </a>
          <a class=" px-24 md:px-6 md:mr-6 py-2 mt-4 cursor-pointer border-2 border-slate-200 rounded-3xl shadow-sm hover:shadow-lg">
            Events
          </a>
          <a class=" px-24 md:px-6 md:mr-6 py-2 mt-4 cursor-pointer border-2 border-slate-200 rounded-3xl shadow-sm hover:shadow-lg">
            History
          </a>
          <a class=" px-24 md:px-6 md:mr-6 py-2 mt-4 cursor-pointer border-2 border-slate-200 rounded-3xl shadow-sm hover:shadow-lg">
            About us
          </a>
          <a class=" px-24 md:px-6 md:mr-6 py-2 mt-4 cursor-pointer border-2 border-slate-200 rounded-3xl  shadow-sm hover:shadow-lg">
            <Link to="/register"> Join us</Link>
          </a>
          <button class="inline-flex items-center md:absolute md:right-0 md:top-10  border-2 hover:border-slate-200 rounded-3xl py-2 px-24 md:px-6 md:mr-6 hover:shadow-lg  mt-4 md:mt-0">
            <Link to="/admin"> Admin login</Link>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
