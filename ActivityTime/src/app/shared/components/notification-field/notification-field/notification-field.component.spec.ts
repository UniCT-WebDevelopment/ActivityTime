import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationFieldComponent } from './notification-field.component';

describe('NotificationFieldComponent', () => {
  let component: NotificationFieldComponent;
  let fixture: ComponentFixture<NotificationFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
