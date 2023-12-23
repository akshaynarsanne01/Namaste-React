import { useState } from "react";

const Heading = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  return (
    <div className="flex bg-[#ccc3ab] text-white text-lg">
      <ul className="flex flex-wrap justify-center items-center m-auto p-4">
        <li className="p-4 hover:text-[#824667] cursor-pointer">Home</li>
        <li className="p-4 hover:text-[#824667] cursor-pointer">About Me</li>
        <li className="p-4 hover:text-[#824667] cursor-pointer">Contact Me</li>
        <li className="p-4 hover:text-[#824667] cursor-pointer">Cart</li>
      </ul>
      <button
        className="mr-5"
        onClick={() => {
          setBtnLogin((prevBtnLogin) =>
            prevBtnLogin === "Login" ? "Logout" : "Login"
          );
        }}
      >
        {btnLogin}
      </button>
    </div>
  );
};

export default Heading;
