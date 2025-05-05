import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useOrbit } from "./useOrbit";

interface PlanetProps {
  name: string;
  radius: number;
  distance: number;
  color: string;
  speed: number;
  eccentricity: number;
  inclination: number;
  longitudeOfAscendingNode: number;
  argumentOfPeriapsis: number;
}

const Planet = ({ 
  name, 
  radius, 
  distance, 
  color, 
  speed,
  eccentricity,
  inclination,
  longitudeOfAscendingNode,
  argumentOfPeriapsis
}: PlanetProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitLineRef = useRef<THREE.Line>(null);
  
  // Create orbit path points (elliptical)
  const orbitPoints = useRef<THREE.Vector3[]>([]);
  
  // Use custom hook for orbit calculation
  const angle = useOrbit(speed, eccentricity);
  
  // Generate orbit path on first render
  if (orbitPoints.current.length === 0) {
    const semiMajorAxis = distance;
    const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity);
    const focalPoint = eccentricity * semiMajorAxis;
    
    // Create elliptical orbit path with 128 points
    for (let i = 0; i < 128; i++) {
      const theta = (i / 128) * Math.PI * 2;
      
      // Calculate point on ellipse in orbital plane
      const x = semiMajorAxis * Math.cos(theta) - focalPoint;
      const z = semiMinorAxis * Math.sin(theta);
      
      // Create rotation matrices for orbital elements
      const rotationMatrix = new THREE.Matrix4()
        // Apply argument of periapsis rotation
        .makeRotationY(argumentOfPeriapsis)
        // Apply inclination rotation
        .multiply(new THREE.Matrix4().makeRotationX(inclination))
        // Apply longitude of ascending node rotation
        .multiply(new THREE.Matrix4().makeRotationY(longitudeOfAscendingNode));
      
      // Create point vector and apply rotations
      const point = new THREE.Vector3(x, 0, z).applyMatrix4(rotationMatrix);
      orbitPoints.current.push(point);
    }
    
    // Close the loop
    orbitPoints.current.push(orbitPoints.current[0].clone());
  }
  
  useFrame(() => {
    if (!meshRef.current) return;
    
    const semiMajorAxis = distance;
    const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity);
    const focalPoint = eccentricity * semiMajorAxis;
    
    // Calculate position on elliptical orbit
    const theta = angle.current;
    
    // Calculate point on ellipse in orbital plane
    const x = semiMajorAxis * Math.cos(theta) - focalPoint;
    const z = semiMinorAxis * Math.sin(theta);
    
    // Create rotation matrices for orbital elements
    const rotationMatrix = new THREE.Matrix4()
      // Apply argument of periapsis rotation
      .makeRotationY(argumentOfPeriapsis)
      // Apply inclination rotation
      .multiply(new THREE.Matrix4().makeRotationX(inclination))
      // Apply longitude of ascending node rotation
      .multiply(new THREE.Matrix4().makeRotationY(longitudeOfAscendingNode));
    
    // Apply rotations to get final position
    const position = new THREE.Vector3(x, 0, z).applyMatrix4(rotationMatrix);
    
    // Set planet position
    meshRef.current.position.set(position.x, position.y, position.z);
  });

  return (
    <>
      {/* Planet mesh */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      {/* Orbital path */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array(orbitPoints.current.flatMap(p => [p.x, p.y, p.z])),
              3
            ]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </line>
    </>
  );
};

export default Planet;