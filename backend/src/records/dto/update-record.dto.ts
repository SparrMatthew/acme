import { PartialType } from '@nestjs/mapped-types';
import { CreateRecordDto } from './create-record.dto';
import { Company } from '../entities/company.entity';

export class UpdateRecordDto extends PartialType(CreateRecordDto) {
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
