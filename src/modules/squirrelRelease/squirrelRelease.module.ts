import { Module } from '@nestjs/common';
import { AssetService } from './services/asset.service';
import { ChannelService } from './services/channel.service';
import { VersionService } from './services/version.service';
import { PlatformService } from './services/platform.service';
import { DatabaseModule } from '../database/database.module';
import { squirrelReleaseProviders } from './squirrelRelease.providers';
// import { CrashReportController } from './crashReport.controller';

@Module({
  imports: [DatabaseModule],
  // controllers: [CrashReportController],
  components: [
    ...squirrelReleaseProviders,
    AssetService,
    ChannelService,
    PlatformService,
    VersionService,
  ],
})

export class SquirrelReleaseModule {}