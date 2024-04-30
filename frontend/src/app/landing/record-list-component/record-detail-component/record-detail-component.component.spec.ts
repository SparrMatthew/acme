import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDetailComponent } from './record-detail-component.component';

describe('RecordDetailComponentComponent', () => {
  let component: RecordDetailComponent;
  let fixture: ComponentFixture<RecordDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
