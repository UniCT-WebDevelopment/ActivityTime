import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textfield-email',
  templateUrl: './textfield-email.component.html',
  styleUrls: ['./textfield-email.component.scss']
})
export class TextfieldEmailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() contentOutput: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder : String = "Parent Placeholder";
  

}
