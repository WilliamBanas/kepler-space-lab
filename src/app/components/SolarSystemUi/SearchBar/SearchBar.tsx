import { History, Search, Telescope } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import useDebounce from "@/app/hooks/useDebounce";
import axios from "axios";

interface CelestialBody {
	name: string;
	id: number;
	type: string;
}

const SearchBar = () => {

  const [search, setSearch] = useState("");
	const [celestialBodies, setCelestialBodies] = useState<CelestialBody[]>([]);
	// const [loading, setLoading] = useState(false);
	const [historic, setHistoric] = useState<CelestialBody[]>([]);
	const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
		const handleSearch = async (search: string) => {
			if (!search) {
				setCelestialBodies([]);
				return;
			}
			try {
				const { data: response } = await axios.get(
					`${process.env.NEXT_PUBLIC_API_URL}/search?q=${debouncedSearch}`
				);
				setCelestialBodies(response);
			} catch (error) {
				console.error(error);
			}
			// setLoading(false);
		};
		handleSearch(search);
	}, [debouncedSearch]);

  useEffect(() => {
		const existingHistoric = JSON.parse(
			localStorage.getItem("selectedBodies") || "[]"
		);
		setHistoric(existingHistoric);
	}, []);

	const handleResultClick = (item: CelestialBody) => {
		// Lire les items existants dans le localStorage
		const existing: CelestialBody[] = JSON.parse(
			localStorage.getItem("selectedBodies") || "[]"
		);

		// Filtrer pour retirer l'élément s'il est déjà présent
		const filtered = existing.filter(
			(historicItem) => historicItem.id !== item.id
		);

		// Ajouter le nouvel élément au début
		const updated: CelestialBody[] = [item, ...filtered].slice(0, 3);
		// Sauvegarder et mettre à jour le state
		localStorage.setItem("selectedBodies", JSON.stringify(updated));
		setHistoric(updated);
	};

	return (
		<div className={styles.searchBar}>
			<input
				name="q"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className={styles.searchBar__input}
				placeholder={"Search..."}
				type="q"
			/>
			<span className={styles.searchBar__icon}>
				<Search className='icon_small' />
			</span>

			{celestialBodies.length > 0 && (
				<div className={styles.searchBar__results}>
					<div className={styles.searchBar__resultsWrapper}>
						{celestialBodies.map((celestialBody: CelestialBody) => (
							<div
								key={celestialBody.id}
								className={styles.searchBar__resultItem}
								onClick={(e) => {
									e.preventDefault(), handleResultClick(celestialBody);
								}}
							>
								<a href="">
									<div className={styles.searchBar__resultMain}>
										<Telescope className='icon_small' />
										<p>{celestialBody.name}</p>
									</div>
									<small className={styles.searchBar__resultType}>
										{celestialBody.type}
									</small>
								</a>
							</div>
						))}
					</div>

					<div className={styles.searchBar__history}>
						{historic?.map((historicItem: CelestialBody) => (
							<div key={historicItem.id} className={styles.searchBar__historyItem}>
								<a href="">
									<div className={styles.searchBar__resultMain}>
										<History className='icon_small' />
										<p>{historicItem.name}</p>
									</div>
								</a>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default SearchBar;
