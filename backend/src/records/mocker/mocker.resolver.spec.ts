import { Test, TestingModule } from '@nestjs/testing';
import { MockerResolver } from './mocker.resolver';

// Mock the faker functions used in the MockerResolver service
jest.mock('@faker-js/faker', () => ({
  ...jest.requireActual('@faker-js/faker'),
  faker: {
    company: {
      name: jest.fn().mockReturnValue('Mock Company'),
    },
    datatype: {
      number: jest.fn().mockReturnValue(50000),
      int: jest.fn().mockImplementation(({ min, max }) => min), // Always return the minimum value
    },
    person: {
      firstName: jest.fn().mockReturnValue('John'),
      lastName: jest.fn().mockReturnValue('Doe'),
    },
    location: {
      streetAddress: jest.fn().mockReturnValue('123 Mock St'),
      city: jest.fn().mockReturnValue('Mocksville'),
      state: jest.fn().mockReturnValue('MockState'),
      zipCode: jest.fn().mockReturnValue('12345'),
    },
    phone: {
      number: jest.fn().mockReturnValue('123-456-7890'),
    },
    // Add other methods you need to mock...
  },
}));
describe('MockerResolver', () => {
  let resolver: MockerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockerResolver],
    }).compile();

    resolver = module.get<MockerResolver>(MockerResolver);
  });

  it('should generate a record with a real name and total annual income', () => {
    const record = resolver.generateRecord();
    expect(record.firstName).toBe('John');
    expect(record.lastName).toBe('Doe');
    expect(record.totalHouseholdIncome).toBe(50000);
  });
});
