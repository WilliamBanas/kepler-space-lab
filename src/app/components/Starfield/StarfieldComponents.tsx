"use client";
import React, { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useCameraConfig } from "@/app/hooks/useCameraConfig";
import styles from './styles.module.css';

const StarPoints: React.FC = () => {
	const pointsRef = useRef<THREE.Points>(null);

	const starCount = 8000;
	const minRadius = 4500; // Rayon minimal de la sphère
	const maxRadius = 4800; // Rayon maximal de la sphère

	const geometry = useMemo(() => {
		const geo = new THREE.BufferGeometry();
		const positions = new Float32Array(starCount * 3);

		// Répartir les étoiles sur une sphère
		for (let i = 0; i < starCount; i++) {
			const radius = minRadius + Math.random() * (maxRadius - minRadius); // Rayon aléatoire pour chaque étoile
			const phi = Math.acos(2 * Math.random() - 1); // Angle polaire
			const theta = Math.random() * Math.PI * 2; // Angle azimutal

			// Conversion des coordonnées sphériques en coordonnées cartésiennes
			positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
			positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
			positions[i * 3 + 2] = radius * Math.cos(phi);
		}

		geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
		return geo;
	}, []);

	// Matériel des points (étoiles)
	const material = useMemo(() => {
		const canvas = document.createElement("canvas");
		canvas.width = 64;
		canvas.height = 64;
		const context = canvas.getContext("2d");

		if (context) {
			const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
			gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
			gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.9)");
			gradient.addColorStop(0.5, "rgba(240, 240, 255, 0.5)");
			gradient.addColorStop(1, "rgba(200, 200, 255, 0)");

			context.fillStyle = gradient;
			context.fillRect(0, 0, 64, 64);

			const texture = new THREE.CanvasTexture(canvas);

			return new THREE.PointsMaterial({
				size: 10,
				map: texture,
				transparent: true,
				depthWrite: false,
				blending: THREE.AdditiveBlending,
				sizeAttenuation: true,
			});
		}

		return new THREE.PointsMaterial({
			size: 5,
			color: "white",
		});
	}, []);

	return <points ref={pointsRef} geometry={geometry} material={material} />;
};

const StarFieldCanvas: React.FC = () => {
	const { position, fov, near, far, controls } = useCameraConfig();
	return (
		<Canvas
			className={styles.starField}
			dpr={[1, 2]}
			gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
			camera={{ position, fov, near, far }}
		>
			<Suspense fallback={null}>
				<StarPoints />
				{controls && (
					<OrbitControls
            makeDefault
						onChange={() => console.log("Camera moved")}
						enableZoom={true}
						enablePan={false}
						maxDistance={10000}
						minDistance={1}
					/>
				)}
        <primitive object={new THREE.AxesHelper(1000)} />
			</Suspense>
		</Canvas>
	);
};

export default StarFieldCanvas;
