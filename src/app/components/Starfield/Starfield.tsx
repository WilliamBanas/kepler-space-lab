"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import styles from "./styles.module.css";

const Stars = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const starTexture = useRef<THREE.Texture | null>(null);
  const [ready, setReady] = useState(false);

  const starCount = 4000;
  const positions = new Float32Array(starCount * 3);
  const sizes = new Float32Array(starCount);
  const colors = new Float32Array(starCount * 3); // Stockage des couleurs des étoiles

  const minRadius = 100;
  const maxRadius = 150;

  useEffect(() => {
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
      setReady(true);
    }
  }, []);

  // Générer les positions et tailles des étoiles
  for (let i = 0; i < starCount; i++) {
    const radius = minRadius + Math.random() * (maxRadius - minRadius);
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);

    sizes[i] = Math.random() * 0.1 + 0.1;

    // Générer des couleurs aléatoires pour les étoiles
    const colorVariation = Math.random();
    if (colorVariation < 0.33) {
      // Bleu
      colors[i * 3] = 0.5 + Math.random() * 0.5;  // Rouge
      colors[i * 3 + 1] = 0.5 + Math.random() * 0.5;  // Vert
      colors[i * 3 + 2] = 1.0;  // Bleu
    } else if (colorVariation < 0.66) {
      // Jaune
      colors[i * 3] = 1.0;  // Rouge
      colors[i * 3 + 1] = 1.0;  // Vert
      colors[i * 3 + 2] = 0.5 + Math.random() * 0.5;  // Bleu
    } else {
      // Rouge
      colors[i * 3] = 1.0;  // Rouge
      colors[i * 3 + 1] = 0.5 + Math.random() * 0.5;  // Vert
      colors[i * 3 + 2] = 0.5 + Math.random() * 0.5;  // Bleu
    }
  }

  useEffect(() => {
    console.log(
      `🌌 Starfield radius range: ${minRadius} to ${maxRadius} units (~${minRadius * 1e6} km to ${maxRadius * 1e6} km)`
    );
  }, []);

  if (!ready || !starTexture.current) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}  // Appliquer les couleurs des étoiles
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.7}
        sizeAttenuation
        transparent
        opacity={1}  // Augmenter l'opacité pour rendre les étoiles plus brillantes
        fog={false}
        blending={THREE.AdditiveBlending}
        map={starTexture.current}
        vertexColors={true}  // Activer les couleurs des sommets
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
        <PerspectiveCamera makeDefault fov={60} position={[0, 0, 200]} />
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarField;
