"use client";
import React from "react";
import styles from "./page.module.css";
import Logo from "./components/Logo/Logo";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
// Nous supprimons l'import de StarField car il est maintenant dans layout.tsx

const Home: React.FC = () => {
  return (
    <>
      {/* Suppression du composant StarField ici */}
      <main className={styles.home}>
        <div className={styles.home__header}>
          <Logo />
          <h1 className={styles.home__header_title}>KEPLER SPACE LAB</h1>
        </div>
        <p className={styles.home__catchphrase}>
          A virtual space lab to explore the celestial bodies of the solar
          system and their orbital path
        </p>
        <Link
          href="/solar-system"
          id="callToActionButton"
          className={styles.home__button}
        >
          <ChevronRight className={styles.home__button_icon} />
          Begin exploration
          <ChevronLeft className={styles.home__button_icon} />
        </Link>
      </main>
    </>
  );
};

export default Home;
