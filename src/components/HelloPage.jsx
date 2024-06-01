import React from 'react';
import styles from "../App.module.css"; // Ensure this path correctly points to your CSS file.


const waveHand = (e) => {
    const element = e.currentTarget;
    element.classList.add(styles.wave); // Add the 'wave' class to trigger the animation
    setTimeout(() => {
        element.classList.remove(styles.wave); // Remove the class after the animation duration
    }, 2000); // Assuming your animation duration is 2000ms
}

function HelloPage() {
  return (
      <header className={styles.intro}>
        <h1 className={styles.intro__hello}>
          Hello! 
          <span className={`${styles.emoji} ${styles.waveHand} ${styles.animated}`} 
          onMouseOver={waveHand} onAnimationEnd={(e) => e.currentTarget.classList.remove(styles.wave)}></span>
        </h1>
        <h2 className={styles.intro__tagline}>
          I'm <span className={styles.name}>Paula Laorga</span>,
          a design-minded junior front-end developer focused on building beautiful interfaces & experiences <span className={`${styles.emoji} ${styles.cheers}`}></span>
        </h2>
        <h3 className={styles.intro__contact}>
          <span>Get in touch </span>
          <span className={`${styles.emoji} ${styles.pointingright}`}></span>
          <span>
            <a href="mailto:paulalaorga@gmail.com" target="_blank" rel="noreferrer" className={styles.highlightLink} aria-label="Email Paula Laorga">paulalaorga@gmail.com</a>
          </span>
        </h3>
      </header>
  );
}

export default HelloPage;
