import { Repository } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { Platform } from '../entities/platform.entity';
import { ResourceRepositoryInterface } from '../../../common/interfaces/resource.repository.interface';

@Component()
export class PlatformService implements ResourceRepositoryInterface {

  /**
   * @param platformRepository
   */
  constructor(
    @Inject('PlatformRepositoryToken') private readonly platformRepository: Repository<Platform>) {}

    async findAll(): Promise<Platform[]> {
      return await this.platformRepository.find();
    }

    /**
     * @param payload
     */
    async save(payload: Platform): Promise<Platform> {
      return await this.platformRepository.save(payload);
    }

    /**
     * @param id
     */
    async findOneById(id: number): Promise<Platform> {
      return await this.platformRepository.findOneById(id);
    }

    /**
     * @param payload
     * @param id
     */
    async updateById(payload: Platform, id: number): Promise<void> {
      return await this.platformRepository.updateById(id, payload);
    }

    /**
     * @param id
     */
    async deleteById(id: number): Promise<void> {
      return await this.platformRepository.deleteById(id);
    }
}