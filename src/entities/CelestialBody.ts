import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class CelestialBody {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar'})
  name: string;  

  @Column({type: 'varchar'})      
  type :string;

  @Column({type: 'float'})
  equatorialRadius: number;

  @Column({type: 'float'})
  mass: number;
  
  @Column({type: 'float'})
  volume: number;

  @Column({type: 'float'})
  distanceFromSun: number;

  @Column({type: 'float'})
  orbitalPeriod: number;

  @Column({type: 'float'})
  rotationPeriod: number;

  @Column({type: 'float'})
  axialTilt: number;

  @Column({type: 'int'})
  numberOfMoons: number;

  @Column({type: 'boolean'})
  hasRings: boolean;

  @Column("text", { array: true })
  atmosphereComposition: string[]

  @Column({type: 'float'})
  semiMajorAxis: number;

  @Column({type: 'float'})
  eccentricity: number;

  @Column({type: 'float'})
  orbitalInclination: number;

  @Column({type: 'float'})
  argumentOfPeriapsis: number;

  @Column({type: 'float'})
  longitudeOfAscendingNode: number;

  @Column({type: 'float'})
  meanAnomaly: number;

  @Column({ type: 'int', nullable: true })
  parentId: number;

  @ManyToOne(() => CelestialBody, { nullable: true })
  parent: CelestialBody | null;
}