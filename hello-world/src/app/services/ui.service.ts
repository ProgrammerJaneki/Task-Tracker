import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  // Creates a function to toggle the showAddTask
  // void because it won't return anything
  // when we call tAT by clicking the Add/Close button, we will subscribe to onToggle
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask); // will show the current value of showAddTask
    // will pass the value of showAddTask to the header.component that
    // the value will catch
  }

  // will fireoff when we toggle the button
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
