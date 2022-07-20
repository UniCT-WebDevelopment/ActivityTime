import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldTextComponent } from './textfield-text.component';

describe('TextfieldTextComponent', () => {
  let component: TextfieldTextComponent;
  let fixture: ComponentFixture<TextfieldTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextfieldTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfieldTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
