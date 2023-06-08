import { CacheModule as CacheModuleNest, Module } from '@nestjs/common';
import { CacheService } from './cache.service';

@Module({
  imports: [CacheModuleNest.register({
    ttl: 9000000001
  }),],
  providers: [CacheService],
  exports: [CacheService]
})
export class CacheModule {}
