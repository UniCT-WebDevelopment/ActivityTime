import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Activities } from '../../models/activities.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  @Input() type : String 
  @Input() id : Number
  @Input() time : String
  @Output() emitter: EventEmitter<Number> = new EventEmitter<Number>();

  constructor(private cd: ChangeDetectorRef) { 
    console.log( "il mio id è : " + this.id)
  }

  ngOnInit(): void {
    console.log( "il mio id è : " + this.id)
  }
 

  getBackground(){  
    if(this.type == "P"){
      return {backgroundColor:"green"}
    }
    else if(this.type == "R"){
      return {backgroundColor:"orange"}
    }
    else if(this.type == "PR"){
      return {backgroundColor:"grey"}
    }    
  }

  EmitActivityInfo(){
    this.emitter.emit(this.id)
  }

  

}
