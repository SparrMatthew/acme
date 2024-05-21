import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MastheadComponent } from './masthead.component';
import { MaterialModule } from '../material.module';

describe('MastheadComponent', () => {
  let component: MastheadComponent;
  let fixture: ComponentFixture<MastheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [MastheadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MastheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
