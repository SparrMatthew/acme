import { Route } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RecordListComponent } from './landing/record-list-component/record-list-component.component';
import { RecordDetailComponent } from './landing/record-list-component/record-detail-component/record-detail-component.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Default route
  { path: 'landing', component: LandingComponent },
  { path: 'records', component: RecordListComponent },
  { path: 'record-detail/:UID', component: RecordDetailComponent }
];
