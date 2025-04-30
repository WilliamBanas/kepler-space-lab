"use client";
// /components/Starfield/Starfield.tsx
import React, { useEffect, useState } from "react";
import StarFieldCanvas from "./StarfieldComponents";
import styles from "./styles.module.css";

const StarField: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simple message de débogage pour vérifier que le composant est bien monté
    console.log("StarField component mounted");
    
    // Marquer comme chargé après un court délai
    const timer = setTimeout(() => {
      setIsLoaded(true);
      console.log("StarField marked as loaded");
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Ajout d'un indicateur de débogage pour vérifier que le composant est bien rendu */}
      <div 
        style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          color: 'white',
          background: 'rgba(0,0,0,0.5)',
          padding: '5px',
          borderRadius: '3px',
          fontSize: '12px',
          zIndex: 9999,
          display: isLoaded ? 'none' : 'block'
        }}
      >
        Chargement du champ d'étoiles...
      </div>
      
      <div className={styles.starField}>
        <StarFieldCanvas />
      </div>
    </>
  );
};

export default StarField;
