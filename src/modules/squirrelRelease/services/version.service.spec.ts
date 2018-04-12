import { Test } from '@nestjs/testing';
import { Version } from '../entities/version.entity';
import { VersionService } from './version.service';
import { mockResourceRepository } from '../../../common/__mocks__/resource.repository.mock';

describe('VersionService', () => {

    let versionService: VersionService;
    const payload = { };

    beforeEach(async () => {
        versionService = new VersionService(mockResourceRepository.getMockImplementation()());
    });

    describe('findAll', () => {
        it('should return an array of entities', async () => {
            const result = ['test'];
            const spy = jest.spyOn(await versionService.versionRepository, 'find').mockImplementation(() => result);
            expect(await versionService.findAll()).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('save', () => {
        it('should save an entity', async () => {
            const result = ['test'];
            const spy = jest.spyOn(await versionService.versionRepository, 'save').mockImplementation(() => result);
            expect(await versionService.save(payload)).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('findOneById', () => {
        it('should show an entity by searching for an id', async () => {
            const result = ['test'];
            const spy = jest.spyOn(await versionService.versionRepository, 'findOneById').mockImplementation(() => result);
            expect(await versionService.findOneById(1)).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('updateById', () => {
        it('should update an entity by searching for an id first', async () => {
            let updatePayload = payload;
            const spy = jest.spyOn(await versionService.versionRepository, 'updateById').mockImplementation(() => updatePayload);
            updatePayload.open = false;
            expect(await versionService.updateById(updatePayload, 1)).toBe(updatePayload);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('deleteById', () => {
        it('should delete a crash report by searching for an id first', async () => {
            const result = { status: 'ok' };
            const spy = jest.spyOn(await versionService.versionRepository, 'deleteById').mockImplementation(() => result);
            expect(await versionService.deleteById(1)).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });
});
