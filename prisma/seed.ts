import { PrismaClient, Prisma } from '../src/app/generated/prisma'
import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
  const data = JSON.parse(fs.readFileSync('prisma/data/data.json', 'utf-8'));

  for (const planet of data) {
    await prisma.celestialBody.create({
      data: {
        name: planet.name,
        type: planet.type,
        equatorialRadius: planet.equatorialRadius,
        mass: planet.mass,
        volume: planet.volume,
        distanceFromSun: planet.distanceFromSun,
        orbitalPeriod: planet.orbitalPeriod,
        rotationPeriod: planet.rotationPeriod,
        axialTilt: planet.axialTilt,
        numberOfMoons: planet.numberOfMoons,
        hasRings: planet.hasRings,
        atmosphereComposition: planet.atmosphereComposition,
        semiMajorAxis: planet.semiMajorAxis,
        eccentricity: planet.eccentricity,
        orbitalInclination: planet.orbitalInclination,
        argumentOfPeriapsis: planet.argumentOfPeriapsis,
        longitudeOfAscendingNode: planet.longitudeOfAscendingNode,
        meanAnomaly: planet.meanAnomaly,
      },
    });
  }
}

main()
  .then(() => {
    console.log('🌍 Celestial bodies seeded successfully');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
