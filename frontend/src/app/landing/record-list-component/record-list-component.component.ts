import { AfterContentInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { Record } from '../models/record';
import { Company } from '../models/company';
import { RecordService } from './record.service';

@Component({
  selector: 'app-record-list-component',
  templateUrl: './record-list-component.component.html',
  styleUrl: './record-list-component.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class RecordListComponent implements OnInit, AfterContentInit {
  displayedColumns: string[] = ['name', 'address', 'city', 'state', 'zip', 'phone', 'icons'];
 

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  expandedElement = 'collapsed';
  rowExpanded = false;
  dataSource!: MatTableDataSource<Record, MatPaginator>;

  ngAfterContentInit(): void {
    if(this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;  
    }
  }

  constructor(
    private router: Router,
    private recordService: RecordService
  
  ) { }
  
  ngOnInit() {
    this.recordService.getAllRecords().subscribe((records)=>{
      this.dataSource = new MatTableDataSource<Record>(records);
    });
    
    this.rowExpanded = false;
  }

  showDetail(record: Record): void {
    this.recordService.setSelectedUID(record.UID);
    this.router.navigate(['record-detail', record.UID])
  }

  totalAnnualSalary(salary: Array<Company>): number {
    console.log('hit')
    let total = 0;

    salary.forEach((company) => {
      total += company.annualSalary;
    })

    this.rowExpanded = !this.rowExpanded;


    return total;

  }
}
