import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFiledAddActTextComponent } from './text-filed-add-act-text.component';

describe('TextFiledAddActTextComponent', () => {
  let component: TextFiledAddActTextComponent;
  let fixture: ComponentFixture<TextFiledAddActTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFiledAddActTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFiledAddActTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
