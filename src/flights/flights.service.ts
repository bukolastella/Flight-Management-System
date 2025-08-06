import { Injectable } from '@nestjs/common';
import { FlightDto } from './dto/flight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from './entities/flight.entity';
import { Repository } from 'typeorm';

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

  findOne(id: string) {
    return this.flightRepo.findOneBy({ id });
  }

  update(id: string, updateFlightDto: FlightDto) {
    return this.flightRepo.update(id, updateFlightDto);
  }

  remove(id: string) {
    return this.flightRepo.delete(id);
  }
}
