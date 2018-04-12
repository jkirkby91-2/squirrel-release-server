import { Asset } from './entities/asset.entity';
import { Connection, Repository } from 'typeorm';
import { Channel } from './entities/channel.entity';
import { Version } from './entities/version.entity';
import { Platform } from './entities/platform.entity';

export const squirrelReleaseProviders = [
  {
    provide: 'AssetRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Asset),
    inject: ['DbConnectionToken'],
  },
  {
    provide: 'ChannelRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Channel),
    inject: ['DbConnectionToken'],
  },
  {
    provide: 'PlatformRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Platform),
    inject: ['DbConnectionToken'],
  },
  {
    provide: 'VersionRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Version),
    inject: ['DbConnectionToken'],
  },
];