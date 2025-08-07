import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class FlightDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  flightNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  airline: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  aircraftModel: string;
}
