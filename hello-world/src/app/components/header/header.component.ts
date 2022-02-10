import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;

  // To use the service you have to declare it to the constructor
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  } // constructor runs whenever an object is initialized

  ngOnInit(): void {
    // This where u want the component to load like HTTP request
  }
  toggleAddTask() {
    this.uiService.toggleAddTask();
    // once this is fired up in the servoice, to watch that we need the Subscription
    // set it up in the constructor
  }

  // Will use this to hide the Add button in the About Page
  // Declare the router in the constructor first
  hasRoute(router: string) {
    return this.router.url === router;

  }
}
