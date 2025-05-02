"use client";
import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import logo from '../assets/logo-white.svg';

const SolarSystem: React.FC = () => {
  return (
    <main className={styles.solarSystem}>
      <header className={styles.solarSystem__header}>
        <div className={styles.solarSystem__header_logo }>
        <Image className={styles.solarSystem__header_logo_image} src={logo} alt=""></Image>
        <h1 className={styles.solarSystem__header_logo_text} >KEPLER SPACE LAB</h1>
        </div>
        
      </header>
    </main>
  );
};

export default SolarSystem;
