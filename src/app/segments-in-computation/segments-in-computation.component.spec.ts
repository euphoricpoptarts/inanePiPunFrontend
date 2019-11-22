import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentsInComputationComponent } from './segments-in-computation.component';

describe('SegmentsInComputationComponent', () => {
  let component: SegmentsInComputationComponent;
  let fixture: ComponentFixture<SegmentsInComputationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentsInComputationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentsInComputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
