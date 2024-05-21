import { Injectable } from '@nestjs/common';
import { Faker } from '@faker-js/faker';

@Injectable()
export class MockerResolver {

  constructor(private faker: Faker) {}

  generateCompany(): Company {
    return {
      companyName: this.faker.company.name(),
      annualSalary: this.faker.datatype.number({ min: 30000, max: 500000 }),
    };
  }

  generateRecord(): Record {
    return {
      UID: this.faker.number.int({ min: 9, max: 9 }).toString(),
      firstName: this.faker.person.firstName(),
      lastName: this.faker.person.lastName(),
      address: this.faker.location.streetAddress(),
      city: this.faker.location.city(),
      state: this.faker.location.state(),
      zip: this.faker.location.zipCode(),
      phone: this.faker.phone.number(),
      areaCode: '303',
      salary: Array.from({ length: this.faker.number.int({ min: 1, max: 3 }) }, () => this.generateCompany()),
      totalHouseholdIncome: this.faker.number.int({ min: 50000, max: 50000000 }),
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