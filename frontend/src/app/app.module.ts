import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LandingComponent } from './landing/landing.component';
import { RecordListComponent } from './landing/record-list/record-list-component';
import { RecordDetailComponent } from './landing/record-list/record-detail/record-detail.component';
import { MastheadModule } from './masthead/masthead.module';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, LandingComponent, RecordListComponent, RecordDetailComponent],
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, FormsModule, MastheadModule, MaterialModule],
  exports: [],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
