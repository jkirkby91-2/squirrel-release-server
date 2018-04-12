import { Test } from '@nestjs/testing';
import { HttpException } from '@nestjs/common';
import { CrashReport } from './crashReport.entity';
import { CrashReportService } from './crashReport.service';
import { CrashReportController } from './crashReport.controller';

describe('CrashReportController', () => {

  let crashReportController: CrashReportController;
  let crashReportService: CrashReportService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ CrashReportController ],
      components: [ CrashReportService,
        {
          provide: 'CrashReportRepositoryToken',
          useClass: CrashReport,
        },
      ],
    }).compile();

    crashReportService = module.get<CrashReportService>(CrashReportService);
    crashReportController = module.get<CrashReportController>(CrashReportController);
  });
});