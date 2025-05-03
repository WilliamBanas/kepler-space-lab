import { CelestialBody } from "@/entities/CelestialBody";
import { initializeDatabase } from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const dataSource = await initializeDatabase();
    const CelestialBodyRepository = dataSource.getRepository(CelestialBody);
    const celestialBodies = await CelestialBodyRepository.find();
    return NextResponse.json(celestialBodies);
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const dataSource = await initializeDatabase();
    const celestialBodyRepository = dataSource.getRepository(CelestialBody);
    const celestialBodyData = await request.json();
    const newCelestialBody = celestialBodyRepository.create(celestialBodyData);
    const savedCelestialBody = await celestialBodyRepository.save(newCelestialBody);
    return NextResponse.json(savedCelestialBody);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}