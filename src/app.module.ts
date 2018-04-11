import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { SquirrelReleaseModule } from './modules/squirrelRelease/squirrelRelease.module';

@Module({
  imports: [
    SquirrelReleaseModule,
    AuthModule,
  ],
})

export class ApplicationModule {}
