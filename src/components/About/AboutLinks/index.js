import React from "react";

const AboutLinks = (props) => (
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h3>
        <strong>Get @ Me</strong>
      </h3>
      <ul className="getAtMe">
        <li>
          <strong>Email: </strong>{" "}
          <a href="mailto:zygster11@gmail.com">zygster11@gmail.com</a>
        </li>
        <li>
          <strong>GitHub: </strong>{" "}
          <a href="https://github.com/ElderBass" target="_blank" rel="noreferrer">
            ElderBass
          </a>
        </li>
        <li>
          <strong>LinkedIn: </strong>{" "}
          <a
            href="https://www.linkedin.com/in/seth-zygarlicke-29a76b174/"
            target="_blank"
            rel="noreferrer"
          >
            Seth Zygarlicke
          </a>
        </li>
        <li>
          <strong>CV/Resume: </strong>{" "}
          <a
            href="https://www.cakeresume.com/seth-zygarlicke"
            target="_blank"
            rel="noreferrer"
          >
            View My Resume
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default AboutLinks;
