"use client";
import React, { useRef, useMemo, Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useCameraConfig } from "@/app/hooks/useCameraConfig";
import styles from './styles.module.css';
import { usePathname } from "next/navigation";

const StarPoints: React.FC = () => {
	const pointsRef = useRef<THREE.Points>(null);

	const starCount = 32000;
	const minRadius = 28000; 
	const maxRadius = 30000; 

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
				size: 50,
				map: texture,
				transparent: true,
				depthWrite: false,
				blending: THREE.AdditiveBlending,
				sizeAttenuation: true,
			});
		}

		return new THREE.PointsMaterial({
			size: 20,
			color: "white",
		});
	}, []);

	return <points ref={pointsRef} geometry={geometry} material={material} />;
};

const CameraController: React.FC = () => {
  const { camera } = useThree();
  const { position, near, far } = useCameraConfig();
  const pathname = usePathname();
  
  const [targetPosition] = useState(() => new THREE.Vector3(...position));
  
  const prevPathRef = useRef(pathname);

  const startPositionRef = useRef<THREE.Vector3>(camera.position.clone());
  
  const transitionDuration = 4.0;
  const transitionProgressRef = useRef(0);
  
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      transitionProgressRef.current = 0;
      startPositionRef.current.copy(camera.position); 
      targetPosition.set(...position);            
      prevPathRef.current = pathname;
    }
  }, [pathname, position, targetPosition]);

  useFrame((_, delta) => {
    camera.near = near;
    camera.far = far;
    
    if (transitionProgressRef.current < transitionDuration) {
      transitionProgressRef.current += delta;
      const progress = Math.min(transitionProgressRef.current / transitionDuration, 1);
      
      const easedProgress = easeInOutCubic(progress);
      
      camera.position.lerpVectors(startPositionRef.current, targetPosition, easedProgress);
      camera.updateProjectionMatrix();
    }
  });

  return null;
};

function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

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
						maxDistance={25000}
						minDistance={1}
					/>
				)}
        <CameraController/>
        <primitive object={new THREE.AxesHelper(1000)} />
			</Suspense>
		</Canvas>
	);
};

export default StarFieldCanvas;
