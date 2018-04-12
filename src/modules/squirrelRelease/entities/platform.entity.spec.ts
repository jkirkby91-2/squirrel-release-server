import { Test } from '@nestjs/testing';
import { Platform } from './platform.entity';
import { AbstractEntity } from '../../../common/entities/abstract.entity';

let instance: Platform;

beforeEach(() => {
    instance = new Platform();
});

it('Check we have a Platform class.', () => {
    expect(instance).toBeInstanceOf(Platform);
    expect(instance).toBeInstanceOf(AbstractEntity);
});
