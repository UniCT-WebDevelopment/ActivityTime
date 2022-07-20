import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textfield-psw',
  templateUrl: './textfield-psw.component.html',
  styleUrls: ['./textfield-psw.component.scss']
})
export class TextfieldPswComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() contentOutput: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder : String = "Parent Placeholder";
  
}
