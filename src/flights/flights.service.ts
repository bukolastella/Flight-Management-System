import { Injectable } from '@nestjs/common';
import { FlightDto } from './dto/flight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from './entities/flight.entity';
import { ObjectId, Repository } from 'typeorm';
import { UpdateFlightDto } from './dto/update-flight.dto';

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

  findOne(id: ObjectId) {
    return this.flightRepo.findOneBy({ _id: id });
  }

  update(id: string, updateFlightDto: UpdateFlightDto) {
    return this.flightRepo.update(id, updateFlightDto);
  }

  remove(id: string) {
    return this.flightRepo.delete(id);
  }
}
