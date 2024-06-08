import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "../logo.png";

export default function Header() {
  const titleText = "Paula Laorga";
  const [displayedTitle, setDisplayedTitle] = useState("");

  useEffect(() => {
    let timeouts = [];

    const animateTitle = () => {
      setDisplayedTitle("");
      titleText.split("").forEach((char, index) => {
        const timeout = setTimeout(() => {
          setDisplayedTitle((prev) => prev + char);
        }, 100 * index);
        timeouts.push(timeout);
      });
      const restartTimeout = setTimeout(
        animateTitle,
        300 * titleText.length + 2000
      );
      timeouts.push(restartTimeout);
    };

    animateTitle();

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    
      <header className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1 className="Title">{displayedTitle}</h1>
        <nav className="Header-menu">
          <div style={{ borderBottom: "#333 1px solid" }}>Work</div>
          <div style={{ borderBottom: "#333 1px solid" }}>About</div>
          <div href="#">Resume</div>
        </nav>
      </header>
      
  );
}
