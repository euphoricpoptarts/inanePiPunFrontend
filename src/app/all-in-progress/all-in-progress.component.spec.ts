import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInProgressComponent } from './all-in-progress.component';

describe('AllInProgressComponent', () => {
  let component: AllInProgressComponent;
  let fixture: ComponentFixture<AllInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
