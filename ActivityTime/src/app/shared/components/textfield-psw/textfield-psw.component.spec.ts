import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldPswComponent } from './textfield-psw.component';

describe('TextfieldPswComponent', () => {
  let component: TextfieldPswComponent;
  let fixture: ComponentFixture<TextfieldPswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextfieldPswComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfieldPswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
