import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ChannelEntityInterface } from './interfaces/channel.entity.interface';

@Entity()
export class Channel implements ChannelEntityInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  name: string;

  @Column('timestamp with time zone', { nullable: true })
  deletedAt: number;

  @Column('timestamp with time zone', { nullable: true, default: new Date() })
  createdAt: number;

  @Column('timestamp with time zone', { nullable: true, default: new Date() })
  updatedAt: number;
}