import React from "react";


import "./style.css";

const Projects = (props) => {
  return (
    <>
      <h3>
        <u>{props.name}</u>
      </h3>
      <p>{props.description}</p>
      <br />
      <img
        src={props.image}
        className="PortfolioPics"
        alt={`${props.name} Demo`}
      />
      <br />
      <p>
        <strong>GitHub:</strong> <a href={props.repo}>{props.repo}</a>
      </p>
      <p>
        <strong>Deployed:</strong> <a href={props.deployed}>{props.deployed}</a>
      </p>
      <br />
    </>
  );
};

export default Projects;
