import { INSTAGRAM } from "../utils/constants";
import { LINKEDIN } from "../utils/constants";
import { GITHUB } from "../utils/constants";
const FooterComponent = () => {
  return (
    <div className="h-24 rounded-xl   bg-[#ccc3ab]">
      <div className="flex justify-center	space-x-3 p-3">
        <a target="_blank" href="https://github.com/akshaynarsanne01">
          <img className="w-10" src={GITHUB}></img>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/akshaynarsanne/">
          <img className="w-10" src={LINKEDIN}></img>
        </a>
        <a target="_blank" href="">
          <img className="w-10" src={INSTAGRAM}></img>
        </a>
      </div>
      <div className="flex justify-center">
        <h3>© 2023 Akshay Narsanne. All rights reserved.</h3>
      </div>
    </div>
  );
};

export default FooterComponent;
