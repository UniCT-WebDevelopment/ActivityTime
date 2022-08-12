import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendFieldComponent } from './friend-field.component';

describe('FriendFieldComponent', () => {
  let component: FriendFieldComponent;
  let fixture: ComponentFixture<FriendFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
