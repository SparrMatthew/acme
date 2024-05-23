import { Company } from './company';
import { Phone } from './phone';


export interface Record {
    UID: string;
    name?: string;
    avatar: any;
    flicker: any;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    areaCode: string;
    phone: string;
    phoneinformation: Phone;
    salary: Company[];
    totalHouseholdIncome: number;
  }