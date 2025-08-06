import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightsModule } from './flights/flights.module';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const url = (configService.get('DATABASE_URL') as string).replace(
          '<db_password>',
          configService.get('DATABASE_PASSWORD') as string,
        );

        return {
          type: 'mongodb',
          url,
          // synchronize: true,
          autoLoadEntities: true,
        };
      },
    }),
    FlightsModule,
    StaffModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
