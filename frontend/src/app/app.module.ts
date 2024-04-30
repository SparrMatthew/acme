import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LandingComponent } from './landing/landing.component';
import { RecordListComponent } from './landing/record-list-component/record-list-component.component';
import { RecordDetailComponent } from './landing/record-list-component/record-detail-component/record-detail-component.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, LandingComponent, RecordListComponent, RecordDetailComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatInputModule,
    MatFormFieldModule, MatCardModule, FormsModule],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
