'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

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
    setMounted(true);
    
    if (typeof window !== 'undefined') {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('three');
      } catch (error) {
        console.error("Error loadig Three.js:", error);
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
