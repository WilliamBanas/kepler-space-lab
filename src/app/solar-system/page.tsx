"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import logo from "../assets/logo-white.svg";
import { Command, Search } from "lucide-react";

const SolarSystem: React.FC = () => {

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue])


	return (
		<main className={styles.solarSystem}>
			<header className={styles.solarSystem__header}>
				<div className={styles.solarSystem__header_logo}>
					<Image
						className={styles.solarSystem__header_logo_image}
						src={logo}
						alt=""
					></Image>
					<h1 className={styles.solarSystem__header_logo_text}>
						KEPLER SPACE LAB
					</h1>
				</div>

				<div className={styles.solarSystem__header_searchBar}>
					<form className={styles.form} action="">
						<input
							name="q"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
							className={styles.solarSystem__header_searchBar_input}
							placeholder={"Search..."}
							type="search"
						/>
						<span className={styles.button_wrap}>
							<Search className={styles.solarSystem__header_searchBar_icon} />
						</span>
					</form>
				</div>
			</header>
		</main>
	);
};

export default SolarSystem;
