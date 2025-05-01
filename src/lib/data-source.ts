import "reflect-metadata";
import { AppDataSource } from '../../ormconfig';

export const connectToDatabase = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  return AppDataSource;
};