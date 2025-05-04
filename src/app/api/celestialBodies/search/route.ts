import { initializeDatabase } from "@/lib/database";
import { CelestialBody } from "@/entities/CelestialBody";
import { NextRequest, NextResponse } from "next/server";
import { ILike } from "typeorm";

export async function GET(req: NextRequest) {
	const searchQuery = req.nextUrl.searchParams.get("q") || "";

	try {
		const dataSource = await initializeDatabase();
		const celestialBodyRepository = dataSource.getRepository(CelestialBody);

		const results = await celestialBodyRepository
			.createQueryBuilder("celestial_body")
			.select([
				"celestial_body.id AS id",
				"celestial_body.name AS name",
				"celestial_body.type AS type",
			])
			.where("celestial_body.name ILIKE :name", { name: `${searchQuery}%` })
			.getRawMany();

		// getRawMany retourne un tableau de { celestial_body_name: "..." }, on mappe les noms

		return NextResponse.json(results);
	} catch (error) {
		console.error("Search error:", error);
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
