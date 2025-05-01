'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { div } from 'three/tsl';

// Import dynamique pour s'assurer que le composant n'est chargé que côté client
const StarFieldCanvas = dynamic(() => import('./components/Starfield/StarfieldComponents'), {
  ssr: false,
  loading: () => (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%',
      backgroundColor: '#000000', 
    }} />
  )
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("ClientLayout mounted");
    setMounted(true);
    
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

      {mounted && <div id='starFieldContainer'><StarFieldCanvas /></div> }
      <div id="content">{children}</div>
    </>
  );
}
