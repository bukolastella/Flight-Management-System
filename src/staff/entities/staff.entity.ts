import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { StaffRole } from '../dto/create-staff.dto';
import { ObjectId } from 'mongodb';

@Entity()
export class Staff {
  @ApiProperty()
  @ObjectIdColumn()
  _id: ObjectId;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: StaffRole,
  })
  role: StaffRole;

  @ApiProperty({ required: false })
  @Column({
    nullable: true,
  })
  defaultFlight?: string;
}
