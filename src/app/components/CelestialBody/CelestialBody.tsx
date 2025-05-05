import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type CelestialBodyProps = {
	name: string;
	radius: number;
	position: [number, number, number]; 
	color?: string;
	textureUrl?: string;
	rotationSpeed?: number;
};

export const CelestialBody = ({
	name,
	radius,
	position,
	color = "#8888ff",
	textureUrl,
	rotationSpeed = 0.001,
}: CelestialBodyProps) => {
	const meshRef = useRef<THREE.Mesh>(null);

	// Animation de rotation
	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.y += rotationSpeed;
		}
	});

	const geometry = <sphereGeometry args={[radius, 32, 32]} />;
	const material = textureUrl ? (
		<meshStandardMaterial map={new THREE.TextureLoader().load(textureUrl)} />
	) : (
		<meshStandardMaterial color={color} />
	);

	return (
		<mesh ref={meshRef} position={position}>
			{geometry}
			{material}
		</mesh>
	);
};
