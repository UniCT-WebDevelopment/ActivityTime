import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldNumComponent } from './textfield-num.component';

describe('TextfieldNumComponent', () => {
  let component: TextfieldNumComponent;
  let fixture: ComponentFixture<TextfieldNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextfieldNumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfieldNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
