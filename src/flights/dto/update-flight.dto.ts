import { PartialType } from '@nestjs/swagger';
import { FlightDto } from './flight.dto';

export class UpdateFlightDto extends PartialType(FlightDto) {}
