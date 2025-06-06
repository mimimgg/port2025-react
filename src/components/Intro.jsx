import React from "react";

import about from "../assets/img/aboutme.jpg";

const introText = {
  title: "frontend developer",
  desc: ["Hello, World", "I am a front-end developer", "Thank you 😚"]
}

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h2 className="intro__title">{introText.title}</h2>

        <div className="intro__lines" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className="intro__text">
          <div className="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div className="img">
            <img src={about} alt="내소개" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
