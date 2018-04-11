import { AssetEntityInterface } from './asset.entity.interface';
import { ChannelEntityInterface } from './channel.entity.interface';
import { EntityInterface } from '../../../../common/interfaces/entity.interface';

export interface VersionEntityInterface extends EntityInterface {
    readonly name: string;
    readonly assets: Array<AssetEntityInterface>;
    readonly channel: ChannelEntityInterface;
    readonly notes: string;
}
