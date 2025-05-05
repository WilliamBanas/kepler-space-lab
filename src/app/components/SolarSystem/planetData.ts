import * as THREE from "three";

// Constants for conversion - reduced scale for better visualization
const AU_TO_UNITS = 20; // Astronomical Unit to scene units (reduced from 100)
const ORBITAL_SPEED_SCALE = 0.02; // Speed multiplier for better visualization
const PLANET_SIZE_SCALE = 0.5; // Scale planet sizes up for better visibility

// Define colors for planets
const PLANET_COLORS = {
  Mercury: "#A9A9A9", // gris
  Venus: "#E6CE6A",   // jaune-orange
  Earth: "#2F6CA3",   // bleu
  Mars: "#C1440E",    // rouge
  Jupiter: "#E1BF92", // beige-orange
  Saturn: "#F7E9B9",  // beige clair
  Uranus: "#D1E7E7",  // bleu clair
  Neptune: "#5B5DDF", // bleu indigo
};

// Function to calculate orbital speed from orbital period
const calculateOrbitalSpeed = (orbitalPeriod: number) => {
  // Convert orbital period (days) to orbital speed (radians per second)
  // The smaller the period, the faster the planet moves
  return (2 * Math.PI) / (orbitalPeriod * 24 * 60 * 60) * ORBITAL_SPEED_SCALE;
};

// Convert astronomical data to Three.js compatible values
export const PLANETS = [
  {
    name: "Mercury",
    radius: 2439.7 * 0.01 * PLANET_SIZE_SCALE, // Scaled for better visualization
    distance: 57.91 * AU_TO_UNITS,
    color: PLANET_COLORS.Mercury,
    speed: calculateOrbitalSpeed(87.97),
    eccentricity: 0.2056,
    inclination: 7.005 * (Math.PI / 180), // Convert to radians
    longitudeOfAscendingNode: 48.331 * (Math.PI / 180), // Convert to radians
    argumentOfPeriapsis: 29.124 * (Math.PI / 180), // Convert to radians
  },
  {
    name: "Venus",
    radius: 6051.8 * 0.01 * PLANET_SIZE_SCALE,
    distance: 108.21 * AU_TO_UNITS,
    color: PLANET_COLORS.Venus,
    speed: calculateOrbitalSpeed(224.7),
    eccentricity: 0.0067,
    inclination: 3.3947 * (Math.PI / 180),
    longitudeOfAscendingNode: 76.68 * (Math.PI / 180),
    argumentOfPeriapsis: 54.884 * (Math.PI / 180),
  },
  {
    name: "Earth",
    radius: 6371 * 0.01 * PLANET_SIZE_SCALE,
    distance: 149.6 * AU_TO_UNITS,
    color: PLANET_COLORS.Earth,
    speed: calculateOrbitalSpeed(365.25),
    eccentricity: 0.0167,
    inclination: 0,
    longitudeOfAscendingNode: -11.26064 * (Math.PI / 180),
    argumentOfPeriapsis: 114.207 * (Math.PI / 180),
  },
  {
    name: "Mars",
    radius: 3389.5 * 0.01 * PLANET_SIZE_SCALE,
    distance: 227.92 * AU_TO_UNITS,
    color: PLANET_COLORS.Mars,
    speed: calculateOrbitalSpeed(687),
    eccentricity: 0.0934,
    inclination: 1.85 * (Math.PI / 180),
    longitudeOfAscendingNode: 49.558 * (Math.PI / 180),
    argumentOfPeriapsis: 286.502 * (Math.PI / 180),
  },
  {
    name: "Jupiter",
    radius: 69911 * 0.002 * PLANET_SIZE_SCALE,
    distance: 778.57 * AU_TO_UNITS,
    color: PLANET_COLORS.Jupiter,
    speed: calculateOrbitalSpeed(4331),
    eccentricity: 0.0489,
    inclination: 1.303 * (Math.PI / 180),
    longitudeOfAscendingNode: 100.464 * (Math.PI / 180),
    argumentOfPeriapsis: 273.867 * (Math.PI / 180),
  },
  {
    name: "Saturn",
    radius: 58232 * 0.002 * PLANET_SIZE_SCALE,
    distance: 1433.53 * AU_TO_UNITS,
    color: PLANET_COLORS.Saturn,
    speed: calculateOrbitalSpeed(10747),
    eccentricity: 0.0565,
    inclination: 2.485 * (Math.PI / 180),
    longitudeOfAscendingNode: 113.665 * (Math.PI / 180),
    argumentOfPeriapsis: 339.392 * (Math.PI / 180),
  },
  {
    name: "Uranus",
    radius: 25362 * 0.002 * PLANET_SIZE_SCALE,
    distance: 2872.46 * AU_TO_UNITS,
    color: PLANET_COLORS.Uranus,
    speed: calculateOrbitalSpeed(30589),
    eccentricity: 0.0457,
    inclination: 0.773 * (Math.PI / 180),
    longitudeOfAscendingNode: 74.006 * (Math.PI / 180),
    argumentOfPeriapsis: 96.998857 * (Math.PI / 180),
  },
  {
    name: "Neptune",
    radius: 24622 * 0.002 * PLANET_SIZE_SCALE,
    distance: 4495.06 * AU_TO_UNITS,
    color: PLANET_COLORS.Neptune,
    speed: calculateOrbitalSpeed(59800),
    eccentricity: 0.009456,
    inclination: 1.77 * (Math.PI / 180),
    longitudeOfAscendingNode: 131.721 * (Math.PI / 180),
    argumentOfPeriapsis: 273.187 * (Math.PI / 180),
  },
];
