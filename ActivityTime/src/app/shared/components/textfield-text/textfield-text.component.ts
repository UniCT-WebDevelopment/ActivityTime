import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textfield-text',
  templateUrl: './textfield-text.component.html',
  styleUrls: ['./textfield-text.component.scss']
})
export class TextfieldTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() contentOutput: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder : String = "Parent Placeholder";
  
}
