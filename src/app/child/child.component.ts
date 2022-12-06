import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('parentdata') public value;
  
  @Output() public ChildEvent = new EventEmitter()
  
  
  constructor() { }

  ngOnInit() {
  }
   


  text(){
    this.ChildEvent.emit("'Thank you' received from Child")
  }



}