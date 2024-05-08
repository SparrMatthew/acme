import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
export class RecordListComponent implements OnInit {
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  expandedElement?: Record | null;
  rowExpanded = false;
  dataSource!: MatTableDataSource<Record, MatPaginator>;
  totalRecords = 0;
  filterValue = '';
  displayedColumns: string[] = ['userID', 'name', 'address', 'city', 'state', 'zip', 'phone', 'icons'];
  time?: Date;

  constructor(
    private router: Router,
    private recordService: RecordService

  ) { }


  ngOnInit() {
    const count = 50;
    this.sort.active = 'UserID';
    this.sort.direction = 'asc';
    this.recordService.generateNewRecordSet(count).subscribe((records: Record[]) => {
      this.totalRecords = records.length;
      this.dataSource = new MatTableDataSource<Record>(records);
      this.dataSource.sort = this.sort;
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data: Record, filter: string) => {
        // Return true if data matches the filter

        return data.UID.includes(filter);
      };
    });

    this.recordService.getCreationTime().subscribe((time: number) => {
      if (time) {
        this.time = new Date(time);
      }
    });


    this.expandedElement = null;
    this.rowExpanded = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue.length >= 2 || filterValue === '') {
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

  generate(count: number): void {
    this.dataSource = new MatTableDataSource<Record>();
    this.time = undefined;
    this.recordService.generateNewRecordSet(count).subscribe((dataset) => {
      if (dataset) {
        this.dataSource = new MatTableDataSource<Record>(dataset);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data: Record, filter: string) => {
          // Implement custom filtering logic
          // Return true if data matches the filter

          return data.phone.toLowerCase().includes(filter);
        };

        this.recordService.getCreationTime().subscribe((time: number) => {
          if (time) {
            this.time = new Date(time);
          }
        });
      }
    });
  }

  showDetailView(record: Record): void {
    this.recordService.setSelectedUID(record.UID);
    this.router.navigate(['record-detail', record.UID])
  }

  totalAnnualSalary(salary: Array<Company>): number {
    let total = 0;

    salary.forEach((company) => {
      total += company.annualSalary;
    })

    this.rowExpanded = !this.rowExpanded;


    return total;

  }
}
