import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    // We want this method to be reusable
    this.buttonClick.emit();
  }

}
