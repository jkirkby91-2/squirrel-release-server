import { Asset } from './asset.entity';
import { Channel } from './channel.entity';
import { AbstractEntity } from '../../../common/entities/abstract.entity';
import { VersionEntityInterface } from './interfaces/version.entity.interface';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Version extends AbstractEntity implements VersionEntityInterface {
    @Column('text', { nullable: true })
    name: string;

    @OneToOne(type => Asset)
    @JoinColumn()
    assets: Array<Asset>;

    @OneToOne(type => Channel)
    @JoinColumn()
    channel: Channel;

    @Column('text', { nullable: true })
    notes: string;
}