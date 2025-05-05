import React from "react";
import * as THREE from "three";

const Sun = () => {
  const sunColor = new THREE.Color("#FDB813"); 

  return (
    <>
      <mesh>
        <sphereGeometry args={[10, 64, 64]} />
        <meshBasicMaterial color={sunColor} />
      </mesh>
      
      <mesh>
        <sphereGeometry args={[12, 32, 32]} />
        <meshBasicMaterial 
          color={sunColor} 
          transparent={true} 
          opacity={0.3} 
        />
      </mesh>
      
      <pointLight 
        position={[0, 0, 0]} 
        intensity={1.5} 
        color="#ffffff"
        distance={0}
        decay={2}
      />
    </>
  );
};

export default Sun;
