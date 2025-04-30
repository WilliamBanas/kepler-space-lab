"use client";
import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const SolarSystem: React.FC = () => {
  return (
    <div style={{ 
      color: 'white', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>
        Solar System Exploration
      </h1>
      <p style={{ fontSize: '1.25rem', textAlign: 'center', maxWidth: '700px', marginBottom: '3rem' }}>
        This is the solar system page. The starfield remains the same as you navigated from the home page!
      </p>
      <Link 
        href="/"
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          color: 'white',
          fontSize: '1.25rem'
        }}
      >
        <ChevronLeft /> Back to Home
      </Link>
    </div>
  );
};

export default SolarSystem;
