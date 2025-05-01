import 'reflect-metadata';
import { AppDataSource } from '../ormconfig';
import { CelestialBody } from '../src/entity/CelestialBody';
import type { DeepPartial } from 'typeorm';
import rawData from './data/celestialBodies.json';

const celestialBodiesData = rawData as DeepPartial<CelestialBody>[];

async function seed() {
  const dataSource = await AppDataSource.initialize();
  const repository = dataSource.getRepository(CelestialBody);

  const entitiesMap = new Map<number, CelestialBody>();
  for (let i = 0; i < celestialBodiesData.length; i++) {
    const data = celestialBodiesData[i];
    const { parentId, ...rest } = data;

    const body = repository.create(rest);

    await repository.save(body);

    entitiesMap.set(i + 1, body); 
  }

  for (let i = 0; i < celestialBodiesData.length; i++) {
    const { parentId } = celestialBodiesData[i];
    
    if (parentId !== null && parentId !== undefined) {
      const child = entitiesMap.get(i + 1);
      const parent = entitiesMap.get(parentId);
      
      if (child && parent) {
        child.parent = parent;
        await repository.save(child); 
      }
    }
  }

  console.log('🌱 Database seeded with celestial bodies!');
  await dataSource.destroy(); 
}

seed().catch((e) => {
  console.error(e);
});
