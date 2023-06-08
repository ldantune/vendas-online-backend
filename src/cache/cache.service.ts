import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {

    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
      ) {}
    
      async getCache<T>(key:string, functioRequest: () => Promise<T>): Promise<T> {
        const allData: T = await this.cacheManager.get(`state_${key}`);
    
        if (allData) {
          return allData;
        }
    
        const cities: T = await functioRequest();
    
        await this.cacheManager.set(`state_${key}`, cities);
    
        return cities;
      }
}
