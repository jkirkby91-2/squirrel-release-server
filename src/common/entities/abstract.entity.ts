import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { EntityInterface } from '../interfaces/entity.interface';

@Entity()
export abstract class AbstractEntity implements EntityInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp with time zone', { nullable: true })
  deletedAt: number;

  @Column('timestamp with time zone', { nullable: true, default: new Date() })
  createdAt: number;

  @Column('timestamp with time zone', { nullable: true, default: new Date() })
  updatedAt: number;
}