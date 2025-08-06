import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './entities/staff.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepo: Repository<Staff>,
  ) {}

  create(createStaffDto: CreateStaffDto) {
    const staff = this.staffRepo.create(createStaffDto);
    return this.staffRepo.save(staff);
  }

  findAll() {
    return this.staffRepo.find();
  }

  findOne(id: string) {
    return this.staffRepo.findOneBy({ _id: new ObjectId(id) });
  }

  update(id: string, updateStaffDto: UpdateStaffDto) {
    return this.staffRepo.update(id, updateStaffDto);
  }

  remove(id: string) {
    return this.staffRepo.delete(id);
  }
}
