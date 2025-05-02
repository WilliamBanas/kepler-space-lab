"use client";

import React, { useRef, useMemo, Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useCameraConfig } from "@/app/hooks/useCameraConfig";
import { usePathname } from "next/navigation";
import styles from './styles.module.css';

// Constantes pour la génération d'étoiles
const STAR_COUNT = 32000;
const MIN_RADIUS = 13000;
const MAX_RADIUS = 15000;
const TWINKLE_SPEED = 0.0005;
const TWINKLE_INTENSITY = 0.1;

/**
 * Composant pour générer le champ d'étoiles
 */
const StarPoints = () => {
  const pointsRef = useRef<THREE.Points>(null);

  // Génère une couleur d'étoile réaliste basée sur une température simulée
  const generateStarColor = () => {
    const color = new THREE.Color();
    color.setHSL(Math.random() * 0.2, 0.7, 0.6);
    return color;
  };

  // Création de la géométrie des étoiles
  const { geometry, sizes } = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(STAR_COUNT * 3);
    const sizes = new Float32Array(STAR_COUNT);
    const colors = new Float32Array(STAR_COUNT * 3);

    // Répartir les étoiles sur une sphère
    for (let i = 0; i < STAR_COUNT; i++) {
      // Distribution sphérique des étoiles
      const radius = MIN_RADIUS + Math.random() * (MAX_RADIUS - MIN_RADIUS);
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;

      // Conversion en coordonnées cartésiennes
      const idx = i * 3;
      positions[idx] = radius * Math.sin(phi) * Math.cos(theta);
      positions[idx + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[idx + 2] = radius * Math.cos(phi);

      // Taille aléatoire pour chaque étoile
      sizes[i] = Math.random() * 50 + 10;

      // Couleur aléatoire pour chaque étoile
      const starColor = generateStarColor();
      colors[idx] = starColor.r;
      colors[idx + 1] = starColor.g;
      colors[idx + 2] = starColor.b;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute("attribute_size", new THREE.BufferAttribute(sizes, 1)); // Nom que nous utilisons dans le shader
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    return { geometry: geo, sizes };
  }, []);

  // Création du matériau pour les étoiles
  const material = useMemo(() => {
    // Crée une texture pour les étoiles avec un dégradé radial
    const texture = createStarTexture();
    
    return new THREE.PointsMaterial({
      size: 40,
      sizeAttenuation: true,
      map: texture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });
  }, []);

  // Animation du scintillement des étoiles
  useFrame(() => {
    if (!pointsRef.current) return;
    
    const time = Date.now() * TWINKLE_SPEED;
    const sizeAttr = pointsRef.current.geometry.attributes.size;
    
    for (let i = 0; i < STAR_COUNT; i++) {
      // Fait varier légèrement la taille pour l'effet de scintillement
      const originalSize = sizeAttr.array[i];
      const fluctuation = Math.sin(i + time) * TWINKLE_INTENSITY + 1;
      sizeAttr.array[i] = originalSize * fluctuation;
    }
    
    sizeAttr.needsUpdate = true;
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
};

/**
 * Crée une texture pour les points d'étoiles
 */
function createStarTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext("2d");

  if (!context) {
    console.warn("Impossible de créer le contexte 2D pour la texture d'étoile");
    return null;
  }

  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.9)");
  gradient.addColorStop(0.5, "rgba(240, 240, 255, 0.5)");
  gradient.addColorStop(1, "rgba(200, 200, 255, 0)");

  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);

  return new THREE.CanvasTexture(canvas);
}

/**
 * Gère l'animation de transition de la caméra
 */
const CameraController = () => {
  const { camera } = useThree();
  const { position, near, far } = useCameraConfig();
  const pathname = usePathname();

  const [targetPosition] = useState(() => new THREE.Vector3(...position));
  const prevPathRef = useRef(pathname);
  const startPositionRef = useRef<THREE.Vector3>(camera.position.clone());
  const transitionProgressRef = useRef(0);
  const transitionDuration = 4.0;

  // Réinitialise la transition lors du changement de route
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      transitionProgressRef.current = 0;
      startPositionRef.current.copy(camera.position);
      targetPosition.set(...position);
      prevPathRef.current = pathname;
    }
  }, [pathname, position, targetPosition]);

  // Animation de la transition de caméra
  useFrame((_, delta) => {
    camera.near = near;
    camera.far = far;

    if (transitionProgressRef.current < transitionDuration) {
      transitionProgressRef.current += delta;
      const progress = Math.min(transitionProgressRef.current / transitionDuration, 1);
      const easedProgress = easeInOutCubic(progress);

      camera.position.lerpVectors(
        startPositionRef.current, 
        targetPosition, 
        easedProgress
      );
      camera.updateProjectionMatrix();
    }
  });

  return null;
};

/**
 * Fonction d'easing pour les transitions
 */
function easeInOutCubic(x: number): number {
  return x < 0.5 
    ? 4 * x * x * x 
    : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

/**
 * Composant principal pour le rendu du champ d'étoiles
 */
const StarFieldCanvas = () => {
  const { position, fov, near, far, controls } = useCameraConfig();

  return (
    <Canvas
      className={styles.starField}
      dpr={[1, 2]}
      gl={{ 
        antialias: true, 
        alpha: true, 
        powerPreference: "high-performance" 
      }}
      camera={{ position, fov, near, far }}
    >
      <Suspense fallback={null}>
        <StarPoints />
        
        {controls && (
          <OrbitControls
            makeDefault
            enableZoom={true}
            enablePan={false}
            maxDistance={45000}
            minDistance={1}
          />
        )}
        
        <CameraController />
        <primitive object={new THREE.AxesHelper(1000)} />
      </Suspense>
    </Canvas>
  );
};

export default StarFieldCanvas;