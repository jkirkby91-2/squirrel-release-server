import { VersionEntityInterface } from './version.entity.interface';
import { PlatformEntityInterface } from './platform.entity.interface';
import { EntityInterface } from '../../../../common/interfaces/entity.interface';

export interface AssetEntityInterface extends EntityInterface {
    readonly name: string;
    readonly platform: PlatformEntityInterface;
    readonly fileType: string;
    readonly hash: string;
    readonly size: number;
    readonly downloadCount: number;
    readonly version: VersionEntityInterface;
}
