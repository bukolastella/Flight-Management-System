import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export enum StaffRole {
  pilot = 'pilot',
  copilot = 'copilot',
  flight_attendant = 'flight_attendant',
}

export class CreateStaffDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ enum: StaffRole })
  @IsEnum(StaffRole)
  role: StaffRole;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsMongoId()
  defaultFlight?: string;
}
