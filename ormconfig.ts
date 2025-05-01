import "reflect-metadata";
import { DataSource } from 'typeorm';
import { CelestialBody } from './src/entity/CelestialBody';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [CelestialBody],
  logging: true,
  synchronize: true,
});