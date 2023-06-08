import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CacheModule } from 'src/cache/cache.module';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CityEntity]),
    CacheModule
  ],
  controllers: [CityController],
  providers: [CityService]
})
export class CityModule {}
