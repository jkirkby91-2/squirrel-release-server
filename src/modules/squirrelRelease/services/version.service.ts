import { Repository } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { Version } from '../entities/version.entity';
import { ResourceRepositoryInterface } from '../../../common/interfaces/resource.repository.interface';

@Component()
export class VersionService implements ResourceRepositoryInterface {

  /**
   * @param versionRepository
   */
  constructor(
    @Inject('VersionRepositoryToken') public readonly versionRepository: Repository<Version>) {}

    async findAll(): Promise<Version[]> {
      return await this.versionRepository.find();
    }

    /**
     * @param payload
     */
    async save(payload: Version): Promise<Version> {
      return await this.versionRepository.save(payload);
    }

    /**
     * @param id
     */
    async findOneById(id: number): Promise<Version> {
      return await this.versionRepository.findOneById(id);
    }

    /**
     * @param payload
     * @param id
     */
    async updateById(payload: Version, id: number): Promise<void> {
      return await this.versionRepository.updateById(id, payload);
    }

    /**
     * @param id
     */
    async deleteById(id: number): Promise<void> {
      return await this.versionRepository.deleteById(id);
    }
}