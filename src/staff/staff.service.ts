import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './entities/staff.entity';
import { FlightsService } from 'src/flights/flights.service';
import { toObjectId } from 'src/utils/util';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepo: Repository<Staff>,
    private readonly flightsService: FlightsService,
  ) {}

  async create(createStaffDto: CreateStaffDto) {
    const { defaultFlight } = createStaffDto;
    if (defaultFlight) {
      await this.flightsService.findOne(defaultFlight);
    }
    const staff = this.staffRepo.create(createStaffDto);
    return this.staffRepo.save(staff);
  }

  findAll() {
    return this.staffRepo.find();
  }

  async findOne(id: string) {
    const staff = await this.staffRepo.findOneBy({
      _id: toObjectId(id),
    });

    if (!staff) {
      throw new NotFoundException('Staff not found');
    }

    return staff;
  }

  async update(id: string, updateStaffDto: UpdateStaffDto) {
    const existingStaff = await this.findOne(id);
    Object.assign(existingStaff, updateStaffDto);
    return this.staffRepo.save(existingStaff);
  }

  async remove(id: string) {
    const staff = await this.findOne(id);
    await this.staffRepo.delete(id);
    return staff;
  }
}
