import React from "react";

import profilePic from "../../../assets/images/Photo-Of-Seth.png";

import "./style.css";

const AboutInfo = (props) => (
  <div className="row About">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <img src={profilePic} className="SethPhoto" alt="Seth" />
      <p>
        Hello there! My name is Seth Zygarlicke and I am orginally from Grand
        Forks, ND, where I spent much of my formative years playing sports and
        video games in equal measure. I graduated from the University of North
        Dakota in 2013 with a BS in Mathematics before entering UND's School of
        Medicine and Health Sciences in 2014. I completed over two years of
        medical school, including passing the{" "}
        <a href="https://en.wikipedia.org/wiki/USMLE_Step_1">
          STEP 1 examination
        </a>
        , before I was dismissed for reasons of conduct (a severely long story).
        I moved to Fargo, ND during this period, working in the service industry
        as a server and bartender to make ends meet while I decided my path
        forward before I made the move to Minneapolis, MN in 2018. I have been
        living and working here, wondering what to do with myself, until I heard
        of a coding boot camp through the University of Minnesota. I had taken a
        Python course as a senior in college, which I absolutely loved, and
        decided to pull the trigger on becoming a programmer. I believe in
        hindsight this will be one of the best decisions I ever made.
        <br /> <br />I LOVE being active. Running, biking, hiking,
        rock-climbing, yoga, basketball, football, tennis...literally anything
        involving athletics and/or physical activity is my jam. Additionally, I
        love reading books of almost all variety, including sci-si/fantasy,
        classic literature, academic nonfiction, and graphic novels. Another
        principle hobby of mine is playing video games. Currently I alternate
        between Destiny 2, Rocket League, and Apex Legends with my friends, but
        I love most types of games. I also thoroughly enjoy select podcasts,
        usually of the long-form conversation type (e.g. Sam Harris's 'Making
        Sense', which I listen to assiduously).
        <br />
        <br /> I am deeply interested in the universe's greatest mysteries,
        mainly the brain and consciousness, and quantum physics. I would love to
        blend my budding passion for coding with either of these fields in some
        way (e.g. machine-learning or AI). My current coding goals include
        diving deeper into JavaScript, learning more about Algorithms and
        Datasets, familiarizing myself with a compiled language (e.g. Java), and
        eventually mastering Python. Other goals I have include learning piano,
        developing fluency in Spanish, running another full marathon, and
        reading 30 books by the end of the 2021.
      </p>
    </div>
  </div>
);

export default AboutInfo;
