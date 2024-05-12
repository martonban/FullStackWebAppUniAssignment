import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitStartComponent } from './visit-start.component';

describe('VisitStartComponent', () => {
  let component: VisitStartComponent;
  let fixture: ComponentFixture<VisitStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitStartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
