"use client";
import Link from "next/link";
import React from "react";
import styles from './page.module.css'

const SolarSystem: React.FC = () => {
  return (
    <main className={styles.solarSystem}><Link style={{ padding: '100px', textDecoration: 'none' }} href="/">Hello world</Link></main>
  );
};

export default SolarSystem;
