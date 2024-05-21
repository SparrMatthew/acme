import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { Record } from '../models/record';
import { Company } from '../models/company';
import { RecordService } from './record.service';
import { Phone } from '../models/phone';

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

export class RecordListComponent implements OnInit, AfterContentChecked {
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  rowExpanded = false;
  totalRecords = 0;
  filterValue = '';
  displayedColumns: string[] = ['userID', 'name', 'address', 'city', 'state', 'zip', 'phone', 'icons'];
  pageSizeOptions = [7, 25, 100];
  dataSetSizes = [76, 15000, 100000, 1000000];
  resolved = false;
  time?: Date;
  expandedElement?: Record | null;
  dataSource!: MatTableDataSource<Record, MatPaginator>;
  pageSize?: number;
  startTime?: () => number;
  generationTimeLabel = '';
  roundtripLabel = '';

  constructor(
    private router: Router,
    private recordService: RecordService

  ) { }

  ngAfterContentChecked() {
    if (this.dataSource.data.length > 0 && !this.resolved) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data: Record, filter: string) => {

        return data.UID.toLowerCase().includes(filter);
      };

      this.resolved = true;
    }
  }

  onPageChange(dataSetSize: number) {
    this.resolved = false;
    this.startTime = new Date().getTime;
    this.dataSource.data = [];
    this.generate(dataSetSize);
    this.resolved = false;
  }

  ngOnInit() {
    this.sort.active = 'UserID';
    this.sort.direction = 'asc';
    this.generate(76);
    this.pageSize = 7;
    this.expandedElement = null;
    this.rowExpanded = false;
    this.dataSource = new MatTableDataSource<Record>();
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

  parsePhoneNumbers(phoneNumber: string): Phone {
    // Regular expression to match phone numbers and optional extensions
    // This pattern will need to be adjusted based on the specific formats you expect
    // const phoneRegex = /^(?:\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const phoneRegex = /^(?:\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    const matches = phoneNumber.match(phoneRegex);
  
    // Create a new Phone object
    const phone: Phone = {
      number: '',
      extension: undefined
    };
  
    if (matches) {
      phone.number = matches[0]; // The full matched string is the phone number
      // If there's an extension, you'll need a separate regex to extract it
    } else {
      console.error('parser fail: '+ phoneNumber);
      console.log("phne: " + phone);
      phone.number = phoneNumber;
    }

    return phone;
  }

  generate(count: number): void {
    const startTime = new Date().getTime();
    this.generationTimeLabel = '';
    this.roundtripLabel = '';

    this.recordService.generateNewRecordSet(count).subscribe((dataset: Record[]) => {
      if (dataset) {
        const endTime = new Date().getTime();
        const roundtrip = endTime - startTime;
        if (roundtrip > 1000) {
          this.roundtripLabel = parseFloat((roundtrip / 1000).toFixed(2)) + " seconds"
        } else {
          this.roundtripLabel = parseFloat(roundtrip.toFixed(2)) + " milliseconds"
        }

        // Parse phone
        dataset.forEach((record: Record)=>{
          record.phoneinformation = this.parsePhoneNumbers(record.phone);
        });

        this.dataSource = new MatTableDataSource<Record>(dataset);
        this.totalRecords = this.dataSource.data.length;
        this.resolved = false;
        this.recordService.getCreationTime().subscribe((generationTime: number) => {
          if (generationTime > 1000) {
            this.generationTimeLabel = parseFloat((generationTime / 1000).toFixed(2)) + " seconds"
          } else {
            this.generationTimeLabel = parseFloat(generationTime.toFixed(2)) + " milliseconds"
          }
        });
      }
    });
  }

  showDetailView(record: Record): void {
    this.recordService.setSelectedUID(record.UID);
    this.router.navigate(['record-detail', record.UID])
  }

  getTotalAnnualSalary(salary: Array<Company>): number {
    let total = 0;

    salary.forEach((company) => {
      total += company.annualSalary;
    })

    this.rowExpanded = !this.rowExpanded;

    return total;

  }
}
