import { Test } from '@nestjs/testing';
import { Asset } from './asset.entity';
import { AbstractEntity } from '../../../common/entities/abstract.entity';

let instance: Asset;

beforeEach(() => {
    instance = new Asset();
});

it('Check we have a Asset class.', () => {
    expect(instance).toBeInstanceOf(Asset);
    expect(instance).toBeInstanceOf(AbstractEntity);
});
