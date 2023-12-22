const Heading = () => (
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

export default Heading;
