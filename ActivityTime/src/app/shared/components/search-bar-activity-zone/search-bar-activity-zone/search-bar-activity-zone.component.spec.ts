import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarActivityZoneComponent } from './search-bar-activity-zone.component';

describe('SearchBarActivityZoneComponent', () => {
  let component: SearchBarActivityZoneComponent;
  let fixture: ComponentFixture<SearchBarActivityZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarActivityZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarActivityZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
