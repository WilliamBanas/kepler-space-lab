"use client";

import React, { Suspense, useMemo, useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { useCameraConfig } from "@/app/hooks/useCameraConfig";
import { usePathname } from "next/navigation";
import styles from './styles.module.css';

import Sun from "./Sun";
import Planet from "./Planet";
import { PLANETS } from "./planetData";

// Constants for starfield
const STAR_COUNT = 50000;
const MIN_RADIUS = 198000;
const MAX_RADIUS = 200000;
const TWINKLE_SPEED = 0.0005;
const TWINKLE_INTENSITY = 0.1;

function createStarTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext("2d");

  if (!context) return null;

  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.9)");
  gradient.addColorStop(0.5, "rgba(240, 240, 255, 0.5)");
  gradient.addColorStop(1, "rgba(200, 200, 255, 0)");

  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);

  return new THREE.CanvasTexture(canvas);
}

const StarPoints = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const originalSizes = useRef<Float32Array | null>(null);

  const generateStarColor = () => {
    const color = new THREE.Color();
    const hue = Math.random() * 0.15 + 0.55; 
    const saturation = Math.random() * 0.3; 
    const lightness = 0.9 + Math.random() * 0.1;
    color.setHSL(hue, saturation, lightness);
    return color;
  };

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(STAR_COUNT * 3);
    const sizes = new Float32Array(STAR_COUNT);
    const colors = new Float32Array(STAR_COUNT * 3);

    for (let i = 0; i < STAR_COUNT; i++) {
      const radius = MIN_RADIUS + Math.random() * (MAX_RADIUS - MIN_RADIUS);
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;

      const idx = i * 3;
      positions[idx] = radius * Math.sin(phi) * Math.cos(theta);
      positions[idx + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[idx + 2] = radius * Math.cos(phi);

      sizes[i] = Math.random() * 100 + 10;

      const color = generateStarColor();
      colors[idx] = color.r;
      colors[idx + 1] = color.g;
      colors[idx + 2] = color.b;
    }

    originalSizes.current = sizes.slice();

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    return geo;
  }, []);

  const material = useMemo(() => {
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

  useFrame(() => {
    if (!pointsRef.current || !originalSizes.current) return;
    const time = Date.now() * TWINKLE_SPEED;
    const sizeAttr = pointsRef.current.geometry.attributes.size;

    for (let i = 0; i < STAR_COUNT; i++) {
      const baseSize = originalSizes.current[i];
      const fluctuation = Math.sin(i + time) * TWINKLE_INTENSITY + 1;
      sizeAttr.array[i] = baseSize * fluctuation;
    }

    sizeAttr.needsUpdate = true;
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
};

const CameraController = () => {
  const { camera } = useThree();
  const { position, near, far } = useCameraConfig();
  const pathname = usePathname();

  const [targetPosition] = useState(() => new THREE.Vector3(...position));
  const prevPathRef = useRef(pathname);
  const startPositionRef = useRef<THREE.Vector3>(camera.position.clone());
  const transitionProgressRef = useRef(0);
  const transitionDuration = 4.0;

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
  return x < 0.5 
    ? 4 * x * x * x 
    : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

const SolarSystemScene = () => {
  const { position, fov, near, far, controls } = useCameraConfig();
  const [showOrbitalPaths, setShowOrbitalPaths] = useState(true);
  const [debug, setDebug] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'd') setDebug(prev => !prev);
      if (e.key === 'o') setShowOrbitalPaths(prev => !prev);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Canvas
      camera={{ position, fov, near, far }}
      className={styles.starField}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.2} />

      <Suspense fallback={null}>
        <StarPoints />
        <Sun />
        
        {PLANETS.map((planet) => (
          <Planet key={planet.name} {...planet} />
        ))}
        
        {controls && (
          <OrbitControls
            makeDefault
            enableZoom={true}
            enablePan={true}
            maxDistance={190000}
            minDistance={15}
            target={[0, 0, 0]}
          />
        )}
        
        <CameraController />
        
        {debug && <Stats />}
      </Suspense>
    </Canvas>
  );
};

export default SolarSystemScene;
