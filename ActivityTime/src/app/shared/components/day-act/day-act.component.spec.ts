import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayActComponent } from './day-act.component';

describe('DayActComponent', () => {
  let component: DayActComponent;
  let fixture: ComponentFixture<DayActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayActComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
