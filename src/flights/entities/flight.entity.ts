import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Flight {
  @ObjectIdColumn()
  id: string;

  @Column()
  flightNumber: string;

  @Column({ unique: true })
  airline: string;

  @Column()
  aircraftModel: string;
}
