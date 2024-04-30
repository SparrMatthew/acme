import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { Record } from '../../models/record';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-record-detail-component',
  templateUrl: './record-detail-component.component.html',
  styleUrl: './record-detail-component.component.scss'
})
export class RecordDetailComponent implements OnInit {
  user!: Record;
  totalAnnualSalary = 0;
  salaryDisplayedColumns!: string[];
  salaryArray!: Company[];

  userID: (() => string) | undefined;
  selectedUserId!: string;

  constructor(recordService: RecordService) {
    this.selectedUserId = recordService.getSelectedUID();
    
    recordService.getRecordByUID(this.selectedUserId).subscribe((user) => {
      this.user = user;
    });
  }


  ngOnInit(): void {
    this.salaryDisplayedColumns = ['company', 'salary'];
  }

  public getTotalSalary(): number {
    this.totalAnnualSalary = 0;
    this.user.salary.forEach((company: Company) => {
      this.totalAnnualSalary += company.annualSalary;
    });

    return this.totalAnnualSalary
  }
}
