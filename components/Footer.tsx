import React from "react";
import github from "../public/githubf.svg";
import twitter from "../public/twitter.svg";
import Image from "next/image";

// const github = "../public/githubf.svg";

function Footer() {
  return (
    <div className="footer">
      <p>
        Crafted by{" "}
        <a href="https://github.com/uibahy" target={"_blank"}>
          Azzoug
        </a>
        , and flawlessly deployed by{" "}
        <a href="https://vercel.com" target={"_blank"}>
          Vercel
        </a>
        .
      </p>
      <div className="icons">
        <a target={"_blank"} href="https://github.com/uibahy">
          <Image alt="Github" src={github} />
        </a>
        <div></div>
        <a target={"_blank"} href="https://twitter.com/uibahy">
          <Image alt="twitter" src={twitter} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
