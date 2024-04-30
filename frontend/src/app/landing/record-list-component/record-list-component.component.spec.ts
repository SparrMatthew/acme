import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordListComponentComponent } from './record-list-component.component';

describe('RecordListComponentComponent', () => {
  let component: RecordListComponentComponent;
  let fixture: ComponentFixture<RecordListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordListComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
