import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Add to the module.ts to use
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // add a property for the api url we're hitting
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { } // set up the http to use the CRUD functionality

  // Use to show the tasks
  getTasks(): Observable<Task[]> {
    //  created an instance to define a subscriber function
    return this.http.get<Task[]>(this.apiUrl); // The content is now coming from the back end
    // const tasks = of(TASKS);  // In real applications, this is how to do it return this.http.get(`/task`);
    // return tasks;
  }

  // Use to delete a task
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  // the task is just a variable, it can be change
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    // the put request will send a data to the api (json.server) to update the file
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

}
