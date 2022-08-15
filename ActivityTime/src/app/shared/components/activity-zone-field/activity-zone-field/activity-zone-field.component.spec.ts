import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityZoneFieldComponent } from './activity-zone-field.component';

describe('ActivityZoneFieldComponent', () => {
  let component: ActivityZoneFieldComponent;
  let fixture: ComponentFixture<ActivityZoneFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityZoneFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityZoneFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
