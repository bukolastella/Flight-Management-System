import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class FlightDto {
  @ApiProperty()
  @IsString()
  flightNumber: string;

  @ApiProperty()
  @IsString()
  airline: string;

  @ApiProperty()
  @IsString()
  aircraftModel: string;
}
