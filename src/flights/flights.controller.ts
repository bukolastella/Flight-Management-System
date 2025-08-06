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
import { ApiResponse } from '@nestjs/swagger';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Flight } from './entities/flight.entity';
import { FlightDto } from './dto/flight.dto';
import { ObjectId } from 'typeorm';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @ApiResponse({
    status: 201,
    description: 'The flight has been successfully created.',
    type: Flight,
  })
  @Post()
  create(@Body() createFlightDto: FlightDto) {
    return this.flightsService.create(createFlightDto);
  }

  @ApiResponse({
    status: 200,
    description: 'The flight has been successfully retrieved.',
    type: Flight,
  })
  @Get()
  findAll() {
    return this.flightsService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'The flight has been successfully retrieved.',
    type: Flight,
  })
  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.flightsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlightDto: UpdateFlightDto) {
    return this.flightsService.update(id, updateFlightDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.flightsService.remove(id);
    return null;
  }
}
