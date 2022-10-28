import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Cards from "./components/Cards";
import Admin from "./components/Admin";
import Gallary from "./components/Gallary";
import Footer from "./components/Footer";
import Test from "./components/Test";
import Member_registration from "./components/Member_registration";
import Sublanding1 from "./components/Sublanding1";
import Domains from "./components/Domains";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar></Navbar>
                <Landing></Landing>
                <Sublanding1></Sublanding1>
                <Domains></Domains>

                <Footer></Footer>
              </div>
            }
          ></Route>

          <Route path="/admin" element={<Admin></Admin>}></Route>
          <Route
            path="/register"
            element={<Member_registration></Member_registration>}
          ></Route>

          <Route path="/test" element={<Test></Test>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
