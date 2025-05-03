import { DataSource } from "typeorm";
import "reflect-metadata";
import { CelestialBody } from "@/entities/CelestialBody";
import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.POSTGRES_USER ,
  password: process.env.POSTGRES_PASSWORD ,
  database: process.env.POSTGRES_DB,
  synchronize: process.env.NODE_ENV !== "production",
  logging: process.env.NODE_ENV !== "production",
  entities: [CelestialBody], 
});

let initialized = false;

export const initializeDatabase = async (): Promise<DataSource> => {
  if (!initialized && !AppDataSource.isInitialized) {
    await AppDataSource.initialize()
      .then(() => {
        initialized = true;
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
        throw err;
      });
  }
  return AppDataSource;
};