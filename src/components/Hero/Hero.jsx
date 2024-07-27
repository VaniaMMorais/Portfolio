import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return( 
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Vânia</h1>
                <p className={styles.description}>I'm a recent graduate in Computer Science and Engineering, now embarking on a Master's in Communication and Web Technologies. <br /> My academic pursuits have equipped me with robust problem-solving skills and a collaborative mindset, qualities I am eager to apply in a professional setting.</p>
                <a href="mailto: vanines05@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};