import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker/index'
@Injectable()
export class RecordsService {
  generateCompany(): Company {
    return {
      companyName: faker.company.name(),
      annualSalary: faker.datatype.number({ min: 30000, max: 500000 }),
    };
  }

  generateRecord(): Record {
    return {
      UID: faker.number.int({min: 9, max: 9}).toString(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      phone: faker.phone.number(),
      areaCode: '303',
      salary: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => this.generateCompany()),
      totalHouseholdIncome: faker.number.int({ min: 50000, max: 50000000 }),
    };
  }

  generateMultipleRecords(count: number): Record[] {
    return Array.from({ length: count }, () => this.generateRecord());
  }
}

class Record {
  UID: string;
  name?: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  areaCode: string;
  phone: string;
  salary: Company[];
  totalHouseholdIncome: number;
}

class Company {
  companyName: string;
  annualSalary: number;
}