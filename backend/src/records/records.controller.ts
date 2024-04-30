import { Controller, Get, Param } from '@nestjs/common';
import { RecordsService } from './records.service';
import { Record } from './entities/record.entity';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordService: RecordsService) {}

  @Get(':UID')
  getRecord(@Param('UID') UID: string): Record {
    return this.recordService.getRecordByUID(UID);
  }

  @Get()
  getAllRecords(): Record[] {
    return this.recordService.getAllRecords();
  }

  @Get('total-income/:UID')
  getTotalIncome(@Param('UID') UID: string): number {
    return this.recordService.calculateTotalIncome(UID);
  }
}