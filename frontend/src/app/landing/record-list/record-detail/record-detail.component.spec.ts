import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordDetailComponent } from './record-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../../material.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'frontend/src/app/app.routes';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from 'frontend/src/app/app.component';
import { MastheadModule } from 'frontend/src/app/masthead/masthead.module';
import { LandingComponent } from '../../landing.component';
import { RecordListComponent } from '../record-list-component';

describe('RecordDetailComponent', () => {
  let component: RecordDetailComponent;
  let fixture: ComponentFixture<RecordDetailComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot(appRoutes),MastheadModule, MaterialModule, FormsModule, BrowserAnimationsModule],
      declarations: [AppComponent, LandingComponent, RecordListComponent, RecordDetailComponent],
      providers: [
        provideAnimationsAsync()
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(RecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

