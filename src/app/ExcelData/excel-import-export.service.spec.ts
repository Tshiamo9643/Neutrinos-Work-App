import { TestBed } from '@angular/core/testing';

import { ExcelImportExportService } from './excel-import-export.service';

describe('ExcelImportExportService', () => {
  let service: ExcelImportExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelImportExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
