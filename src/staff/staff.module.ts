import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './entities/staff.entity';
import { FlightsModule } from 'src/flights/flights.module';

@Module({
  imports: [TypeOrmModule.forFeature([Staff]), FlightsModule],
  controllers: [StaffController],
  providers: [StaffService],
})
export class StaffModule {}
