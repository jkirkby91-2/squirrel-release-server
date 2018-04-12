import { AssetEntityInterface } from './asset.entity.interface';
import { ChannelEntityInterface } from './channel.entity.interface';
import { AbstractEntityInterface } from '../../../../common/interfaces/abstract.entity.interface';

export interface VersionEntityInterface extends AbstractEntityInterface {
    readonly name: string;
    readonly assets: Array<AssetEntityInterface>;
    readonly channel: ChannelEntityInterface;
    readonly notes: string;
}
