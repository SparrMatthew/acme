import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { Record } from '../../models/record';
import { RecordService } from '../record.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrl: './record-detail.component.scss'
})
export class RecordDetailComponent implements OnInit {
  user?: Record | null;
  totalAnnualSalary = 0;
  salaryDisplayedColumns!: string[];
  salaryArray!: Company[];

  userID: (() => string) | undefined;
  selectedUserId!: string;

  constructor(recordService: RecordService, private router: Router) {
    this.selectedUserId = recordService.getSelectedUID();
    if (this.selectedUserId === "0000000"){
      this.router.navigate(['/records']);
    }
    
    recordService.getRecordByUID(this.selectedUserId).subscribe((user) => {
      this.user = user;
    });
  }


  ngOnInit(): void {
    this.salaryDisplayedColumns = ['company', 'salary'];
  }

  public getTotalSalary(): number {
    this.totalAnnualSalary = 0;
    this.user?.salary.forEach((company: Company) => {
      this.totalAnnualSalary += company.annualSalary;
    });

    return this.totalAnnualSalary
  }
}
