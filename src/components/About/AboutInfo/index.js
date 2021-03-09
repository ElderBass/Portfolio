import React from "react";

import profilePic from "../../../assets/images/Photo-Of-Seth.png";

import "./style.css";

const AboutInfo = (props) => (
  <div className="row About">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <img
        src={profilePic}
        className="SethPhoto"
        alt="Photo of Seth"
      />
      <p>
        Hello there! My name is Seth Zygarlicke and I am orginally from Grand
        Forks, ND, where I spent much of my formative years playing sports and
        video games in equal measure. I graduated from the University of North
        Dakota in 2013 with a BS in Mathematics before entering UND's School of
        Medicine and Health Sciences in 2014. I completed over two years of this
        program before I was dismissed for reasons of conduct (looonng story). I
        moved to Fargo, ND during this period, working in the service industry
        as a server and bartender before I made the move to Minneapolis, MN in
        2018. I have been living and working here, wondering what to do myself,
        until I heard of this boot camp and pulled the trigger!
        <br /> <br />I LOVE being active. Running, biking, hiking, yoga,
        basketball, football, tennis...literally anything involving athletics
        and/or physical activity is my jam. Additionally, I love reading books
        of almost all variety, including sci-si/fantasy, classic literature,
        academic nonfiction, and graphic novels. Another principle hobby of mine
        is playing video games. Currently I am grossly obsessed with Destiny 2,
        but I love most types of games. I also thoroughly enjoy select podcasts,
        usually of the heady, discussion-filled type (e.g. Sam Harris's 'Making
        Sense'). I am deeply interested in the universe's greatest mysteries,
        mainly the brain/consciousness, and quantum physics. My current goals
        include learning to code (ayyyy), teaching myself piano, and developing
        fluency in Spanish.</p>
    </div>
  </div>
);

export default AboutInfo;
