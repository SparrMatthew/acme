import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { Record } from '../models/record';
import { Company } from '../models/company';
import { RecordService } from './record.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list-component.html',
  styleUrl: './record-list-component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class RecordListComponent implements OnInit, AfterContentInit {
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  expandedElement?: Record | null;
  rowExpanded = false;
  dataSource!: MatTableDataSource<Record, MatPaginator>;
  totalRecords = 0;
  filterValue= '';
  displayedColumns: string[] = ['name', 'address', 'city', 'state', 'zip', 'phone', 'icons'];


  ngAfterContentInit(): void {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  constructor(
    private router: Router,
    private recordService: RecordService

  ) { }

  ngOnInit() {
    this.recordService.getAllRecords().subscribe((records) => {
      this.totalRecords = records.length;
      this.dataSource = new MatTableDataSource<Record>(records);
      this.dataSource.filterPredicate = (data: Record, filter: string) => {
        // Implement custom filtering logic
        // Return true if data matches the filter

        return data.phone.toLowerCase().includes(filter);
      };
    });
    
    this.expandedElement = null;
    this.rowExpanded = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue.length >= 3 || filterValue === '') {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  clearFilter() {
    this.filterValue = '';
    this.dataSource.filter = '';
  }
  expandRow(record: Record): void {
    this.expandedElement = this.expandedElement === record ? null : record;
  }

  showDetailView(record: Record): void {
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
