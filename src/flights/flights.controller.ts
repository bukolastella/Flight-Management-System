import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FlightsService } from './flights.service';
import { FlightDto } from './dto/flight.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Post()
  create(@Body() createFlightDto: FlightDto) {
    return this.flightsService.create(createFlightDto);
  }

  @ApiResponse({
    status: 201,
    description: 'The flight has been successfully created.',
    type: FlightDto,
  })
  @Get()
  findAll() {
    return this.flightsService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'The flight has been successfully retrieved.',
    type: FlightDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlightDto: FlightDto) {
    return this.flightsService.update(id, updateFlightDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.flightsService.remove(id);
    return null;
  }
}
