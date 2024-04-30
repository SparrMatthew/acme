import {Company} from './company';

export interface Record {
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