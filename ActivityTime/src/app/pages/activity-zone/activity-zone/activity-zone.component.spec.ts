import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityZoneComponent } from './activity-zone.component';

describe('ActivityZoneComponent', () => {
  let component: ActivityZoneComponent;
  let fixture: ComponentFixture<ActivityZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
