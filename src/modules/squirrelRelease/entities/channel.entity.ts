import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from '../../../common/entities/abstract.entity';
import { ChannelEntityInterface } from './interfaces/channel.entity.interface';

@Entity()
export class Channel extends AbstractEntity implements ChannelEntityInterface {
  @Column('text', { nullable: true })
  name: string;
}