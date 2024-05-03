import { Route } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RecordListComponent } from './landing/record-list/record-list-component';
import { RecordDetailComponent } from './landing/record-list/record-detail/record-detail.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Default route
  { path: 'landing', component: LandingComponent },
  { path: 'records', component: RecordListComponent },
  { path: 'record-detail/:UID', component: RecordDetailComponent }
];
