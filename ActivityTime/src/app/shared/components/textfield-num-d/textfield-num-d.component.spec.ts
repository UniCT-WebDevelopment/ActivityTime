import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldNumDComponent } from './textfield-num-d.component';

describe('TextfieldNumDComponent', () => {
  let component: TextfieldNumDComponent;
  let fixture: ComponentFixture<TextfieldNumDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextfieldNumDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfieldNumDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
