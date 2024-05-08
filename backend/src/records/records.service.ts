import { Injectable } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { Record } from './entities/record.entity';
import { faker } from '@faker-js/faker';
import { Company } from './entities/company.entity';

@Injectable()
export class RecordsService {
  private mockDatabase: CreateRecordDto[] = this.generateMultipleRecords(100);

  getRecordByUID(UID: string): Record {
    // Mock database fetch
    return this.mockDatabase.find(record => record.UID === UID);
  }

  getAllRecords(): Record[] {
    // Mock database fetch
    return this.mockDatabase;
  }

  calculateTotalIncome(UID: string): number {
    const record = this.getRecordByUID(UID);
    if (record) {
      return record.salary.reduce((acc, companySalary) => acc + companySalary.annualSalary, 0);
    }
    return 0;
  }

  generateCompany(): Company {
    return {
      companyName: faker.company.name(),
      annualSalary: faker.number.int({ min: 30000, max: 500000 }),
    };
  }

  generateRecord(): Record {
    return {
      UID: faker.number.int({ min: 100000000, max: 999999999 }).toString(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      phone: faker.phone.number(),
      areaCode: '303',
      salary: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => this.generateCompany()),
      totalHouseholdIncome: faker.number.int({ min: 50000, max: 50000000 }),
    };
  }

  generateMultipleRecords(count: number): Record[] {
    this.mockDatabase = Array.from({ length: count }, () => this.generateRecord());

    return this.mockDatabase;
  }
}
