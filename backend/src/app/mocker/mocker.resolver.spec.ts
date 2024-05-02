import { Test, TestingModule } from '@nestjs/testing';
import { MockerResolver } from './mocker.resolver';

describe('MockerResolver', () => {
  let resolver: MockerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockerResolver],
    }).compile();

    resolver = module.get<MockerResolver>(MockerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
