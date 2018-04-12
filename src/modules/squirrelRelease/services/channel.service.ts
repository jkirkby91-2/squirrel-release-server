import { Repository } from 'typeorm';
import { Component, Inject } from '@nestjs/common';
import { Channel } from '../entities/channel.entity';
import { ResourceRepositoryInterface } from '../../../common/interfaces/resource.repository.interface';

@Component()
export class ChannelService implements ResourceRepositoryInterface {

  /**
   * @param channelRepository
   */
  constructor(
    @Inject('ChannelRepositoryToken') private readonly channelRepository: Repository<Channel>) {}

    async findAll(): Promise<Channel[]> {
      return await this.channelRepository.find();
    }

    /**
     * @param payload
     */
    async save(payload: Channel): Promise<Channel> {
      return await this.channelRepository.save(payload);
    }

    /**
     * @param id
     */
    async findOneById(id: number): Promise<Channel> {
      return await this.channelRepository.findOneById(id);
    }

    /**
     * @param payload
     * @param id
     */
    async updateById(payload: Channel, id: number): Promise<void> {
      return await this.channelRepository.updateById(id, payload);
    }

    /**
     * @param id
     */
    async deleteById(id: number): Promise<void> {
      return await this.channelRepository.deleteById(id);
    }
}