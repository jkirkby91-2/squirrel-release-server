import { Test } from '@nestjs/testing';
import { Asset } from '../entities/asset.entity';
import { AssetService } from './asset.service';
import { mockResourceRepository } from '../../../common/__mocks__/resource.repository.mock';

describe('Asset Service', () => {

    let assetService: AssetService;
    const payload = { };

    beforeEach(async () => {
        assetService = new AssetService(mockResourceRepository.getMockImplementation()());
    });

    describe('findAll', () => {
        it('should return an array of entities', async () => {
            const result = ['test'];
            const spy = jest.spyOn(await assetService.assetRepository, 'find').mockImplementation(() => result);
            expect(await assetService.findAll()).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('save', () => {
        it('should save an entity', async () => {
            const result = ['test'];
            const spy = jest.spyOn(await assetService.assetRepository, 'save').mockImplementation(() => result);
            expect(await assetService.save(payload)).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('findOneById', () => {
        it('should show an entity by searching for an id', async () => {
            const result = ['test'];
            const spy = jest.spyOn(await assetService.assetRepository, 'findOneById').mockImplementation(() => result);
            expect(await assetService.findOneById(1)).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('updateById', () => {
        it('should update an entity by searching for an id first', async () => {
            let updatePayload = payload;
            const spy = jest.spyOn(await assetService.assetRepository, 'updateById').mockImplementation(() => updatePayload);
            updatePayload.open = false;
            expect(await assetService.updateById(updatePayload, 1)).toBe(updatePayload);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('deleteById', () => {
        it('should delete a crash report by searching for an id first', async () => {
            const result = { status: 'ok' };
            const spy = jest.spyOn(await assetService.assetRepository, 'deleteById').mockImplementation(() => result);
            expect(await assetService.deleteById(1)).toBe(result);
            expect(spy).toHaveBeenCalled();
        });
    });
});
