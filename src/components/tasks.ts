import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
import { TaskService } from '../services/task-service';
import { Task } from '../datatypes/task';
import { Http } from 'angular2/http';
@Component({
  selector: 'tasks-component',
  providers: [TaskService],
  template: `
    <ul>
      <li *ng-for="#task of tasks">
        {{ task.id }} - {{ task.description }}
      </li>
    </ul>
  `,
  bindings: [TaskService],
  directives: [CORE_DIRECTIVES]
})
export class TasksComponent {
  tasks: Array<Task>;
  constructor(public taskService: TaskService) {
    console.log('Routed to the task view');
    console.log('task service is ', taskService);
    taskService.getTasks().subscribe((results) => {
       console.log(results);
       this.tasks = results;
     });
    ;
  }
}
