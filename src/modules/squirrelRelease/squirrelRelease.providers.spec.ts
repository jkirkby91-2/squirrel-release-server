import { Test } from '@nestjs/testing';
import { squirrelReleaseProviders } from './squirrelRelease.providers';
import { mockSquirrelReleaseProviders } from './__mocks__/squirrelRelease.providers.mock';
import { Asset } from './entities/asset.entity';
import { Connection } from 'typeorm';

describe('squirrelReleaseProviders', () => {
    it('matches even if received contains additional elements', () => {
        expect(JSON.stringify(mockSquirrelReleaseProviders[0])).toBe(JSON.stringify(squirrelReleaseProviders[0]));
        expect(JSON.stringify(mockSquirrelReleaseProviders[1])).toBe(JSON.stringify(squirrelReleaseProviders[1]));
        expect(JSON.stringify(mockSquirrelReleaseProviders[2])).toBe(JSON.stringify(squirrelReleaseProviders[2]));
        expect(JSON.stringify(mockSquirrelReleaseProviders[3])).toBe(JSON.stringify(squirrelReleaseProviders[3]));
    });
});
