import React from "react";
import github from "../public/github.svg";
import logoIG from "../public/logoIG.svg";
import Image from "next/image";

function Navbar() {
  return (
    <div className="navbar">
      {/* <Image alt="Logo" src={logoIG} /> */}
      {/* <h2>Azzoug</h2> */}
      <a target={"_blank"} href="https://github.com/uibahy/image-generator">
        Azzoug
      </a>
      <a target={"_blank"} href="https://github.com/uibahy/image-generator">
        <Image alt="Github" src={github} />
        Start on Github
      </a>
    </div>
  );
}

export default Navbar;
