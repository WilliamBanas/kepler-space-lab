import React from "react";
import StarField from "./components/Starfield/Starfield";
import styles from "./page.module.css";
import Logo from "./components/Logo/Logo";
import Head from "next/head";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>Home - Kepler Space Lab</title>{" "}
			</Head>
			<main className={styles.home}>
				<StarField />

				<div className={styles.home__header}>
					<Logo />
					<h1 className={styles.home__header_title}>KEPLER SPACE LAB</h1>
				</div>

				<p className={styles.home__catchphrase}>
					A virtual space lab to explore the celestial bodies of the solar
					system and their orbital path
				</p>

				<button id="callToActionButton" className={styles.home__button}><ChevronRight className={styles.home__button_icon} />Begin exploration<ChevronLeft className={styles.home__button_icon} /> </button>
			</main>
		</>
	);
};

export default Home;
