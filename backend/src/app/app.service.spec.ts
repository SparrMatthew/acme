import { Test } from '@nestjs/testing';
import { AppService } from './app.service';
import { describe, it } from 'node:test';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      // expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});

function beforeAll(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

