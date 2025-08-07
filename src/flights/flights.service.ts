import { Injectable, NotFoundException } from '@nestjs/common';
import { FlightDto } from './dto/flight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from './entities/flight.entity';
import { Repository } from 'typeorm';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { toObjectId } from 'src/utils/util';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepo: Repository<Flight>,
  ) {}

  create(createFlightDto: FlightDto) {
    const flight = this.flightRepo.create(createFlightDto);
    return this.flightRepo.save(flight);
  }

  findAll() {
    return this.flightRepo.find();
  }

  async findOne(id: string) {
    const flight = await this.flightRepo.findOneBy({
      _id: toObjectId(id),
    });

    if (!flight) {
      throw new NotFoundException('Flight not found!');
    }

    return flight;
  }

  async update(id: string, updateFlightDto: UpdateFlightDto) {
    const existingFlight = await this.findOne(id);
    Object.assign(existingFlight, updateFlightDto);
    return this.flightRepo.save(existingFlight);
  }

  async remove(id: string) {
    const flight = await this.findOne(id);
    await this.flightRepo.delete(id);
    return flight;
  }
}
