import React from "react";
import "../styles/Projects.css";
import gif from "../img/gif.gif";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="project1">
        <div className="project-desc1">
          <h2>Project 1</h2>
          <div className="project-tech1">
            <p>Project description</p>
          </div>
        </div>
        <div className="project-img1">
          <img src={gif} alt="project" />
        </div>
      </div>
      <div className="project2">
        <div className="project-img2">
          <img src={gif} alt="project" />
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
          <img src={gif} alt="project" />
        </div>
      </div>
    </div>
  );
}
