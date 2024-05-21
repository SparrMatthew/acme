import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule, 
        MatPaginatorModule, 
        MatIconModule, 
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        MatFormFieldModule, 
        MatCardModule, 
        MatProgressSpinnerModule,
        MatSelectModule,
        MatOptionModule 
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule, 
        MatPaginatorModule, 
        MatIconModule, 
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        MatFormFieldModule, 
        MatCardModule, 
        MatProgressSpinnerModule,
        MatSelectModule,
        MatOptionModule
    ]
})
export class MaterialModule { }