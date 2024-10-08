import React from "react";
import "../styles/Projects.css";
import FactoryAI from "../img/FactoryAI.webp";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="project1">
        <div className="project-desc1">
          <h2>Factory AI</h2>
          <div className="project-tech1">
            <p>Predictive maintenance software for factories</p>
            <h3>Saas platform | NEXT.js | tremor | AWS</h3>
          </div>
        </div>
        <div className="project-img1">
          <img src={FactoryAI} alt="project" />
        </div>
      </div>
      <div className="project2">
        <div className="project-img2">
          <img src={FactoryAI} alt="project" />
        </div>
        <div className="project-desc2">
          <h2>Project 1</h2>
          <div className="project-tech2">
            <p>Project description</p>
          </div>
        </div>
      </div>
      <div className="project3">
        <div className="project-desc3">
          <h2>Project 1</h2>
          <div className="project-tech3">
            <p>Project description</p>
          </div>
        </div>
        <div className="project-img3">
          <img src={FactoryAI} alt="project" />
        </div>
      </div>
    </div>
  );
}
