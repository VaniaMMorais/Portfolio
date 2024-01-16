import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return( 
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Vânia</h1>
                <p className={styles.description}>I'm a Computer Science and Engineering student who is coming to the end of my degree. Ever since I started programming, I've been captivated by the possibilities of technology. My studies have given me strong problem-solving skills and a collaborative mindset.</p>
                <a href="mailto: vanines05@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};