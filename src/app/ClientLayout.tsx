'use client';
// ClientLayout.tsx - composant client pour la gestion de Three.js
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Import dynamique pour s'assurer que le composant n'est chargé que côté client
const StarField = dynamic(() => import('./components/Starfield/Starfield'), {
  ssr: false,
  loading: () => (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%',
      backgroundColor: '#000010', 
      zIndex: -1 
    }} />
  )
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("ClientLayout mounted");
    setMounted(true);
    
    // Vérifier que Three.js est disponible
    if (typeof window !== 'undefined') {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const THREE = require('three');
        console.log("Three.js version loaded:", THREE.REVISION);
      } catch (error) {
        console.error("Error loading Three.js:", error);
      }
    }
  }, []);

  return (
    <>

      {mounted && <StarField />}
      <div id="content">{children}</div>
    </>
  );
}
