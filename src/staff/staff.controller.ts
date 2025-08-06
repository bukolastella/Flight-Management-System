import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Staff } from './entities/staff.entity';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @ApiResponse({
    status: 201,
    description: 'The staff has been successfully created.',
    type: Staff,
  })
  @Post()
  create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @ApiResponse({
    status: 200,
    description: 'The staff has been successfully retrieved.',
    type: Staff,
  })
  @Get()
  findAll() {
    return this.staffService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'The staff has been successfully retrieved.',
    type: Staff,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffService.findOne(id);
  }

  @ApiResponse({
    status: 200,
    description: 'The staff has been successfully retrieved.',
    type: Staff,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.update(id, updateStaffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffService.remove(id);
  }
}
