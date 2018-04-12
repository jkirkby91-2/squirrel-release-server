import { VersionEntityInterface } from './version.entity.interface';
import { PlatformEntityInterface } from './platform.entity.interface';
import { AbstractEntityInterface } from '../../../../common/interfaces/abstract.entity.interface';

export interface AssetEntityInterface extends AbstractEntityInterface {
    readonly name: string;
    readonly platform: PlatformEntityInterface;
    readonly fileType: string;
    readonly hash: string;
    readonly size: number;
    readonly downloadCount: number;
    readonly version: VersionEntityInterface;
}
