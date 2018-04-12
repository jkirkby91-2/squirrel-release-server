import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntityInterface } from '../interfaces/abstract.entity.interface';

@Entity()
export abstract class AbstractEntity implements AbstractEntityInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp with time zone', { nullable: true })
  deletedAt: number;

  @Column('timestamp with time zone', { nullable: true, default: new Date() })
  createdAt: number;

  @Column('timestamp with time zone', { nullable: true, default: new Date() })
  updatedAt: number;
}