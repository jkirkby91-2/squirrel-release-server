export const mockSquirrelReleaseProviders = [
    {
        provide: 'AssetRepositoryToken',
        useFactory: jest.fn(),
        inject: ['DbConnectionToken'],
      },
      {
        provide: 'ChannelRepositoryToken',
        useFactory: jest.fn(),
        inject: ['DbConnectionToken'],
      },
      {
        provide: 'PlatformRepositoryToken',
        useFactory: jest.fn(),
        inject: ['DbConnectionToken'],
      },
      {
        provide: 'VersionRepositoryToken',
        useFactory: jest.fn(),
        inject: ['DbConnectionToken'],
      },
];