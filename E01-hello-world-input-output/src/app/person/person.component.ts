import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() name;
  @Output() sendName = new EventEmitter<string>();


  send(){
    this.sendName.emit(this.name);
  }

  constructor() { }

  ngOnInit() {
  }

}
