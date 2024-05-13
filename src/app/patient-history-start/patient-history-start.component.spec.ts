import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHistoryStartComponent } from './patient-history-start.component';

describe('PatientHistoryStartComponent', () => {
  let component: PatientHistoryStartComponent;
  let fixture: ComponentFixture<PatientHistoryStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientHistoryStartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientHistoryStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
