import { Version } from './version.entity';
import { Platform } from './platform.entity';
import { AbstractEntity } from '../../../common/entities/abstract.entity';
import { AssetEntityInterface } from './interfaces/asset.entity.interface';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Asset extends AbstractEntity implements AssetEntityInterface {
    @Column('text', { nullable: true })
    name: string;

    @OneToOne(type => Platform)
    @JoinColumn()
    platform: Platform;

    @Column('text', { nullable: true })
    fileType: string;

    @Column('text', { nullable: true })
    hash: string;

    @Column('integer', { nullable: true })
    size: number;

    @Column('integer', { nullable: true })
    downloadCount: number;

    @OneToOne(type => Version)
    @JoinColumn()
    version: Version;
}