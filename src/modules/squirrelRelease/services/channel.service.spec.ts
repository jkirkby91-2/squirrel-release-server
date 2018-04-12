import { Test } from '@nestjs/testing';
import { Channel } from '../entities/channel.entity';
import { ChannelService } from './channel.service';
import { mockResourceRepository } from '../../../common/__mocks__/resource.repository.mock';

describe('VersionService', () => {

    let channelService: ChannelService;
    const payload = { };

    beforeEach(async () => {
        channelService = new ChannelService(mockResourceRepository.getMockImplementation()());
    });

    describe('findAll', () => {
        it('should return an array of entities', async () => {
            const result = ['test'];
            const spy = jest.spyOn(await channelService.channelRepository, 'find').mockImplementation(() => result);
            expect(await channelService.findAll()).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('save', () => {
        it('should save an entity', async () => {
            const result = ['test'];
            const spy = jest.spyOn(await channelService.channelRepository, 'save').mockImplementation(() => result);
            expect(await channelService.save(payload)).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('findOneById', () => {
        it('should show an entity by searching for an id', async () => {
            const result = ['test'];
            const spy = jest.spyOn(await channelService.channelRepository, 'findOneById').mockImplementation(() => result);
            expect(await channelService.findOneById(1)).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('updateById', () => {
        it('should update an entity by searching for an id first', async () => {
            let updatePayload = payload;
            const spy = jest.spyOn(await channelService.channelRepository, 'updateById').mockImplementation(() => updatePayload);
            updatePayload.open = false;
            expect(await channelService.updateById(updatePayload, 1)).toBe(updatePayload);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('deleteById', () => {
        it('should delete a crash report by searching for an id first', async () => {
            const result = { status: 'ok' };
            const spy = jest.spyOn(await channelService.channelRepository, 'deleteById').mockImplementation(() => result);
            expect(await channelService.deleteById(1)).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });
});
