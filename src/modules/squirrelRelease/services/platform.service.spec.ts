import { Test } from '@nestjs/testing';
import { Platform } from '../entities/platform.entity';
import { PlatformService } from './platform.service';
import { mockResourceRepository } from '../../../common/__mocks__/resource.repository.mock';

describe('VersionService', () => {

    let platformService: PlatformService;
    const payload = { };

    beforeEach(async () => {
        platformService = new PlatformService(mockResourceRepository.getMockImplementation()());
    });

    describe('findAll', () => {
        it('should return an array of entities', async () => {
            const result = ['test'];
            const spy = jest.spyOn(await platformService.platformRepository, 'find').mockImplementation(() => result);
            expect(await platformService.findAll()).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('save', () => {
        it('should save an entity', async () => {
            const result = ['test'];
            const spy = jest.spyOn(await platformService.platformRepository, 'save').mockImplementation(() => result);
            expect(await platformService.save(payload)).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('findOneById', () => {
        it('should show an entity by searching for an id', async () => {
            const result = ['test'];
            const spy = jest.spyOn(await platformService.platformRepository, 'findOneById').mockImplementation(() => result);
            expect(await platformService.findOneById(1)).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('updateById', () => {
        it('should update an entity by searching for an id first', async () => {
            let updatePayload = payload;
            const spy = jest.spyOn(await platformService.platformRepository, 'updateById').mockImplementation(() => updatePayload);
            updatePayload.open = false;
            expect(await platformService.updateById(updatePayload, 1)).toBe(updatePayload);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('deleteById', () => {
        it('should delete a crash report by searching for an id first', async () => {
            const result = { status: 'ok' };
            const spy = jest.spyOn(await platformService.platformRepository, 'deleteById').mockImplementation(() => result);
            expect(await platformService.deleteById(1)).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });
});
