import React from "react";
import "./logoSection.css";
// import sym from "./sym.png";

// import logo1 from "./logo4.png";
// import logo2 from "./logo2.png";
// import logo3 from "./logo3.png";
import NewLogo from "./LogoNew.jpeg"

import {MIDDLE_SECTION} from "../../Module/General";

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  // var myLogo;
  // if (MIDDLE_SECTION.LOGO_EFFECT) {
  //   myLogo = (
  //     <div className="logoS">
  //       <img className="Logo sym" src={sym} alt="Dechacks" />
  //       <img className="Logo logo1" src={logo1} alt="Dechacks" />
  //       <img className="Logo logo2" src={logo2} alt="Dechacks" />
  //       <img className="Logo logo3" src={logo3} alt="Dechacks" />
  //     </div>
  //   );
  // } else {
  //   myLogo = (
  //     <div className="logoS">
  //       <img className="Logo sym" src={sym} alt="Dechacks" />
  //       <img className="Logo logo1" src={logo1} alt="Dechacks" />
  //     </div>
  //   );
  // }
  return (
    <div className="logoS">
          <img className="Logo logo1" src={NewLogo} alt="Dechacks" />
    </div>
  )
}

export {Logo, LogoSectionAbout};
