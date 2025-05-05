import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * Custom hook for handling orbital mechanics
 * @param speed - Angular velocity in radians per second
 * @param eccentricity - Orbital eccentricity (0 = circle, 0-1 = ellipse)
 */
export const useOrbit = (speed: number, eccentricity: number = 0) => {
  const angle = useRef(Math.random() * Math.PI * 2); // Random starting position
  
  useFrame((_, delta) => {
    angle.current += delta * speed;
    
    // Keep angle within 0-2π range to avoid floating point issues
    if (angle.current > Math.PI * 2) {
      angle.current -= Math.PI * 2;
    }
  });
  
  return angle;
};
