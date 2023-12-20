import React from "react";
import ReactDOM from "react-dom/client";

const logo = require("./Images/images.png");
const TitleHeading = () => (
  <div className="flex bg-[#ccc3ab] text-white text-lg">
    {/* <img className="flex-none w-24" src={logo} /> */}
    <ul className="flex flex-wrap justify-center items-center m-auto p-4">
      <li className=" p-4 hover:text-[#824667] cursor-pointer">Home</li>
      <li className=" p-4 hover:text-[#824667] cursor-pointer">About Me</li>
      <li className=" p-4 hover:text-[#824667] cursor-pointer">Contact Me</li>
      <li className=" p-4 hover:text-[#824667] cursor-pointer">Cart</li>
    </ul>
  </div>
);

const Body = () => {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="flex justify-center p-2 space-2">
        <input className="border rounded-lg " placeholder="  Search...." />
        <button
          className="p-2 border-spacing-2 border-2 rounded-lg border-slate-400 hover:bg-2 hover:bg-[#c9c0a5]"
          type="submit"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center space-x-2 p-8">
        <div className="border w-80 rounded-lg shadow-lg">
          <img className="w-full p-1" src={logo} />
          <div className="flex justify-center">
            <h1>This is content</h1>
          </div>
        </div>
        <div className="border w-80 rounded-lg shadow-lg ">
          <img className="w-full p-1" src={logo} />
          <div className="flex justify-center">
            <h1>This is content</h1>
          </div>
        </div>
        <div className="border w-80 rounded-lg shadow-lg">
          <img className="w-full p-1" src={logo} />
          <div className="flex justify-center">
            <h1>This is content</h1>
          </div>
        </div>
        <div className="border w-80 rounded-lg shadow-lg">
          <img className="w-full p-1" src={logo} />
          <div className="flex justify-center">
            <h1>This is content</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const github = require("./Images/github.svg");
const linkedin = require("./Images/LinkedIn.svg");
const instagram = require("./Images/instagram.svg");
const FooterComponent = () => {
  return (
    <div className="h-24 rounded-lg   bg-[#ccc3ab]">
      <div className="flex justify-center	space-x-3 p-3">
        <a target="_blank" href="https://github.com/akshaynarsanne01">
          <img className="w-10" src={github}></img>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/akshaynarsanne/">
          <img className="w-10" src={linkedin}></img>
        </a>
        <a target="_blank" href="">
          <img className="w-10" src={instagram}></img>
        </a>
      </div>
      <div className="flex justify-center">
        <h3>© 2023 Akshay Narsanne. All rights reserved.</h3>
      </div>
    </div>
  );
};

const AppComponent = () => {
  return (
    <>
      <TitleHeading></TitleHeading>
      <Body></Body>
      <FooterComponent></FooterComponent>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
