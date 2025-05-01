import { PrismaClient } from '../src/app/generated/prisma'
import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
  const data = JSON.parse(fs.readFileSync('prisma/data/data.json', 'utf-8'));
  
  console.log(`🪐 Processing ${data.length} celestial bodies...`);
  
  for (const planet of data) {
    const celestialBodyData = {
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
      parentId: planet.parentId,
    };

    const existing = await prisma.celestialBody.findUnique({
      where: { name: planet.name }
    });

    if (existing) {
      await prisma.celestialBody.update({
        where: { name: planet.name },
        data: celestialBodyData
      });
    } else {
      await prisma.celestialBody.create({
        data: celestialBodyData
      });
    }
  }
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });