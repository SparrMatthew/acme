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

  it('should render title', () => {
    const fixture = TestBed.createComponent(MastheadComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain(
      'Acme Salary Solutions'
    );
  });
});
