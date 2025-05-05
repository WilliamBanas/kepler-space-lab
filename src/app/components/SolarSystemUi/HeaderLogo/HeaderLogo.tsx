import Image from "next/image";
import styles from "./styles.module.css";
import logo from "../../../assets/logo-white.svg"

const HeaderLogo = () => {
	return (
		<div className={styles.headerLogo}>
			<Image
				className={styles.headerLogo__image}
				src={logo}
				alt=""
			></Image>
			<h1 className={styles.headerLogo__title}>KEPLER SPACE LAB</h1>
		</div>
	);
};

export default HeaderLogo;
