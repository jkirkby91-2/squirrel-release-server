import { Test } from '@nestjs/testing';
import { Channel } from './channel.entity';

let instance: Channel;

beforeEach(() => {
    instance = new Channel();
});

it('Check we have a Channel class.', () => {
    expect(instance).toBeInstanceOf(Channel);
});
