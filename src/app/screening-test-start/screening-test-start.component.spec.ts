import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningTestStartComponent } from './screening-test-start.component';

describe('ScreeningTestStartComponent', () => {
  let component: ScreeningTestStartComponent;
  let fixture: ComponentFixture<ScreeningTestStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningTestStartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreeningTestStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
