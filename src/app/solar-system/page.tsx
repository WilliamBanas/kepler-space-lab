"use client";
import React from "react";
import styles from "./page.module.css";
import HeaderLogo from "../components/SolarSystemUi/HeaderLogo/HeaderLogo";
import SearchBar from "../components/SolarSystemUi/SearchBar/SearchBar";

const SolarSystem: React.FC = () => {

	return (
		<main className={styles.solarSystem}>
			<header className={styles.solarSystem__header}>
				<HeaderLogo />
        <SearchBar />
			</header>
		</main>
	);
};

export default SolarSystem;
