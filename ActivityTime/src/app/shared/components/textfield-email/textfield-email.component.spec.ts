import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldEmailComponent } from './textfield-email.component';

describe('TextfieldEmailComponent', () => {
  let component: TextfieldEmailComponent;
  let fixture: ComponentFixture<TextfieldEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextfieldEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfieldEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
