"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import logo from "../assets/logo-white.svg";
import { Command, Search } from "lucide-react";
import axios from "axios";
import useDebounce from "../hooks/useDebounce";
import { CelestialBody } from "@/entities/CelestialBody";

interface celestialBody {
  name: string;
  id: number;
  type: string;
}

const SolarSystem: React.FC = () => {
	const [search, setSearch] = useState("");
	const [celestialBodies, setCelestialBodies] = useState([]);
	// const [loading, setLoading] = useState(false);

	const debouncedSearch = useDebounce(search, 500);

	useEffect(() => {
		// setLoading(true);
		const handleSearch = async (search: string) => {
			if (!search) {
				setCelestialBodies([]);
				return;
			}
			try {
				const { data: response } = await axios.get(
					`${process.env.NEXT_PUBLIC_API_URL}/search?q=${debouncedSearch}`
				);
        console.log(response)
				setCelestialBodies(response);
			} catch (error) {
				console.error(error);
			}
			// setLoading(false);
		};
		handleSearch(search);
	}, [debouncedSearch]);

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
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className={styles.solarSystem__header_searchBar_input}
							placeholder={"Search..."}
							type="q"
						/>
						<span className={styles.button_wrap}>
							<Search className={styles.solarSystem__header_searchBar_icon} />
						</span>
					</form>

					{celestialBodies.length > 0 && (
						<div className={styles.results}>
							{celestialBodies.map((celestialBody: CelestialBody) => (
								<div key={celestialBody.id} className={styles.resultContainer}>
									<a  href="">
										<p>{celestialBody.name}</p>
                    <small className={styles.small}>{celestialBody.type}</small>
									</a>
								</div>
							))}
						</div>
					)}
				</div>
			</header>
		</main>
	);
};

export default SolarSystem;
