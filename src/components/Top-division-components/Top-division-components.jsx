import React from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";

import {TOP_SECTION, SOCIALS} from "../../Module/General";

function Btn(props) {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}

function Myinfo() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <div 
	        class="apply-button" 
	        data-hackathon-slug="dechack" 
	        data-button-theme="dark-inverted"
	        style={{height: 44, width: 312, margin: 20}}>
      </div>
      <div className="join_dis">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
          <Btn
            ico="fab fa-2x fa-discord"
            class="join_disco"
            type=" Join our discord"
            overlay="Click the link"
          />
        </a>
        </div>
    </div>
  );
}

export {Btn, Myinfo};
