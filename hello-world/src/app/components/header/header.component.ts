import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  
  constructor() { } // constructor runs whenever an object is initialized

  ngOnInit(): void { // This where u want the component to load like HTTP request
  }

}
