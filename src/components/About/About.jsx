import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/universityIcon.png")} alt="University icon" style={{ width: '65px', height: '65px', padding: '5px' }} />
            <div className={styles.aboutItemText}>
              <h3>Student at University of Aveiro</h3>
              <p>
              I have a Bachelor's in Computer Science and Engineering and I'm starting a Master's Degree in Communication and Web Technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>My preferences</h3>
              <p>
                Throughout my degree I've worked with many technologies and <br/> frameworks, but my favourite part has always been working in Frontend/Fullstack.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/softSkilsIcon.png")} alt="Soft Skils icon" style={{ width: '65px', height: '65px', padding: '5px' }}/>
            <div className={styles.aboutItemText}>
              <h3>Soft Skils</h3>
              <p>
                Teamwork, Empathy, Adaptability, Initiative, Collaboration and Continuous Learning
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};