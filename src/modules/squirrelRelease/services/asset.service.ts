import { Repository } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { Asset } from '../entities/asset.entity';
import { AbstractServiceRepository } from '../../../common/repositories/abstract.repository';
import { ResourceRepositoryInterface } from '../../../common/interfaces/resource.repository.interface';

@Component()
export class AssetService extends AbstractServiceRepository implements ResourceRepositoryInterface {

  /**
   * @param assetRepository
   */
  constructor(
    @Inject('AssetRepositoryToken') private readonly assetRepository: Repository<Asset>) {
      super();
    }

    async findAll(): Promise<Asset[]> {
      return await this.assetRepository.find();
    }

    /**
     * @param payload
     */
    async save(payload: Asset): Promise<Asset> {
      return await this.assetRepository.save(payload);
    }

    /**
     * @param id
     */
    async findOneById(id: number): Promise<Asset> {
      return await this.assetRepository.findOneById(id);
    }

    /**
     * @param payload
     * @param id
     */
    async updateById(payload: Asset, id: number): Promise<void> {
      return await this.assetRepository.updateById(id, payload);
    }

    /**
     * @param id
     */
    async deleteById(id: number): Promise<void> {
      return await this.assetRepository.deleteById(id);
    }
}