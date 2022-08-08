import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-filed-add-act-text',
  templateUrl: './text-filed-add-act-text.component.html',
  styleUrls: ['./text-filed-add-act-text.component.scss']
})
export class TextFiledAddActTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() contentOutput: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder : String = "Parent Placeholder";
}
