"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import styles from "./styles.module.css";

const Stars = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const starTexture = useRef<THREE.Texture | null>(null);

  useEffect(() => {
    // Création de la texture circulaire pour les étoiles
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext("2d");

    if (context) {
      const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(0.8, "rgba(255, 255, 255, 0.1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      context.fillStyle = gradient;
      context.fillRect(0, 0, 32, 32);

      starTexture.current = new THREE.CanvasTexture(canvas);
    }
  }, []);

  // Génération des étoiles
  const starCount = 4000;
  const positions = new Float32Array(starCount * 3);
  const sizes = new Float32Array(starCount);

  for (let i = 0; i < starCount; i++) {
    const radius = 100 + Math.random() * 20;
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);

    sizes[i] = Math.random() * 0.2 + 0.1;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.25}
        sizeAttenuation
        transparent
        color="white"
        opacity={0.7}
        fog={false}
        blending={THREE.AdditiveBlending}
        map={starTexture.current}
      />
    </points>
  );
};

const StarField: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const timer = setTimeout(() => {
      const bgElement = document.getElementById("bg");
      if (bgElement) {
        bgElement.style.opacity = "1";
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <div id="bg" className={`${styles.starField} ${styles.fadeIn}`}>
      <Canvas dpr={[1, 2]} performance={{ min: 0.5 }}>
        <PerspectiveCamera makeDefault fov={60} position={[0, 0, 0]} />
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarField;
