-- CreateTable
CREATE TABLE "CelestialBody" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "equatorialRadius" DOUBLE PRECISION NOT NULL,
    "mass" DOUBLE PRECISION NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL,
    "distanceFromSun" DOUBLE PRECISION NOT NULL,
    "orbitalPeriod" DOUBLE PRECISION NOT NULL,
    "rotationPeriod" DOUBLE PRECISION NOT NULL,
    "axialTilt" DOUBLE PRECISION NOT NULL,
    "numberOfMoons" INTEGER NOT NULL,
    "hasRings" BOOLEAN NOT NULL,
    "atmosphereComposition" TEXT NOT NULL,
    "semiMajorAxis" DOUBLE PRECISION NOT NULL,
    "eccentricity" DOUBLE PRECISION NOT NULL,
    "orbitalInclination" DOUBLE PRECISION NOT NULL,
    "argumentOfPeriapsis" DOUBLE PRECISION NOT NULL,
    "longitudeOfAscendingNode" DOUBLE PRECISION NOT NULL,
    "meanAnomaly" DOUBLE PRECISION NOT NULL,
    "parentId" INTEGER,

    CONSTRAINT "CelestialBody_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CelestialBody" ADD CONSTRAINT "CelestialBody_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "CelestialBody"("id") ON DELETE SET NULL ON UPDATE CASCADE;
