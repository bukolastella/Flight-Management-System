import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Flight {
  @ApiProperty()
  @ObjectIdColumn()
  _id: ObjectId;

  @ApiProperty()
  @Column()
  flightNumber: string;

  @ApiProperty()
  @Column()
  airline: string;

  @ApiProperty()
  @Column()
  aircraftModel: string;
}
