import { initializeDatabase } from "@/lib/database";
import { CelestialBody } from "@/entities/CelestialBody";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const { id } = params;

		const celestialBodyId = parseInt(id, 10);

		if (isNaN(celestialBodyId)) {
			return NextResponse.json(
				{ message: "L'ID doit être un nombre" },
				{ status: 400 }
			);
		}

		const dataSource = await initializeDatabase();
		const celestialBodyRepository = dataSource.getRepository(CelestialBody);
		const celestialBody = await celestialBodyRepository.findOneBy({
			id: celestialBodyId,
		});

		if (!celestialBody) {
			return NextResponse.json(
				{ message: "Celestial body not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(celestialBody);
	} catch (error) {
		console.error("GET error:", error); // 👈 Ajoute ça
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const { id } = params;
		const celestialBodyId = parseInt(id, 10);

		if (isNaN(celestialBodyId)) {
			return NextResponse.json(
				{ message: "L'ID doit être un nombre" },
				{ status: 400 }
			);
		}

		const celestialBodyData = await request.json();
		const dataSource = await initializeDatabase();
		const celestialBodyRepository = dataSource.getRepository(CelestialBody);
		const existingCelestialBody = await celestialBodyRepository.findOneBy({
			id: celestialBodyId,
		});

		if (!existingCelestialBody) {
			return NextResponse.json(
				{ message: "Celestial body not found" },
				{ status: 404 }
			);
		}

		celestialBodyRepository.merge(existingCelestialBody, celestialBodyData);
		const updatedCelestialBody = await celestialBodyRepository.save(
			existingCelestialBody
		);

		return NextResponse.json(updatedCelestialBody);
	} catch (error) {
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}

export async function DELETE(
	req: NextRequest,
	{
		params,
	}: {
		params: { id: string };
	}
) {
	try {
		const { id } = params;
		const celestialBodyId = parseInt(id, 10);

		if (isNaN(celestialBodyId)) {
			return NextResponse.json(
				{ message: "L'ID doit être un nombre" },
				{ status: 400 }
			);
		}

		const dataSource = await initializeDatabase();
		const celestialBodyRepository = dataSource.getRepository(CelestialBody);
		const result = await celestialBodyRepository.delete(celestialBodyId);

		if (result.affected === 0) {
			return NextResponse.json(
				{ message: "Celestial body not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{ message: "Celestial body successfully deleted" },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		);
	}
}
