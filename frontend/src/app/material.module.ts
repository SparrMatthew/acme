import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MastheadModule } from './masthead/masthead.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

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
        MatProgressSpinnerModule 
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
        MatProgressSpinnerModule     ]
})
export class MaterialModule { }