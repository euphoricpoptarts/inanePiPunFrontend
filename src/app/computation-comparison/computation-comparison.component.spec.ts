import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputationComparisonComponent } from './computation-comparison.component';

describe('ComputationComparisonComponent', () => {
  let component: ComputationComparisonComponent;
  let fixture: ComponentFixture<ComputationComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputationComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputationComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
