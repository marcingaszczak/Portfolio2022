import React from "react";

import Marcin from "./../../images/Marcin.jpg";

const AboutMe = () => {
  return (
    <div className="About-me">
      <article className="About-me__Text">
        Hi, I`m Marcin, a junior Front-end Developer. I graduated BSc in the
        field of Automatic Control and Robotics and MSc at the field of
        Mechanical Engineering at Wroclaw University of Science and Technology.
        I have been learning HTML, CSS, JS and React for 2 years and I am now
        looking for a new job.
      </article>
      <img className="About-me__Img" src={Marcin} alt="Portrait" />
    </div>
  );
};

export default AboutMe;
