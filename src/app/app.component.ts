import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vizsga';

  today: boolean = true;
  tomorrow: boolean = false;

  todayToDo: Todo[] = [];
  tomorrowToDo: Todo[] = [];
  toDo: Todo = new Todo();

  addToDo(tasks: Todo) {
    
    if (!tasks.task) {
      alert("Írj be valamit!");
      return;
    }

    const newTask: Todo = { ...tasks };

    if (this.today && !this.tomorrow) {
      this.todayToDo.push(newTask);
    } else if (this.tomorrow && !this.today) {
      this.tomorrowToDo.push(newTask);
    } else {
      alert('Válassz ki egy napot!');
    }

    this.toDo = new Todo();
    this.today = true;
    this.tomorrow = false;
  }

}
