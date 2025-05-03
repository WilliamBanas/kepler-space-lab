import { initializeDatabase } from "@/lib/database";
import { CelestialBody } from "@/entities/CelestialBody";
import { NextRequest, NextResponse } from "next/server";
import { ILike } from "typeorm";

export async function GET(req: NextRequest) {
  const searchQuery = req.nextUrl.searchParams.get("q") || "";

  try {
    const dataSource = await initializeDatabase();
    const celestialBodyRepository = dataSource.getRepository(CelestialBody);

    const results = await celestialBodyRepository.find({
      where: {
        name: ILike(`${searchQuery}%`),
      },
    });

    return NextResponse.json(results);
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}