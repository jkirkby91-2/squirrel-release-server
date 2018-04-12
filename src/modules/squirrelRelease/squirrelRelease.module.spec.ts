import { Test } from '@nestjs/testing';
import { SquirrelReleaseModule } from './squirrelRelease.module';

let instance: SquirrelReleaseModule;

beforeEach(() => {
    instance = new SquirrelReleaseModule();
});

it('Check we have a CrashReportModule class.', () => {
    expect(instance).toBeInstanceOf(SquirrelReleaseModule);
});
