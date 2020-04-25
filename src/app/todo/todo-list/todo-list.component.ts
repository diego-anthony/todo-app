import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app-state.model';
import { FilterType } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  todos:Todo[];

  todoSubscription:Subscription;
  currentFilter:FilterType = 'all';

  constructor(private _store:Store<AppState>) { }

  ngOnInit(): void {
    this.getTodos();
  }

  ngOnDestroy(): void {
    this.todoSubscription.unsubscribe();
  }

  getTodos() {
    // this.todoSubscription = this._store.select('todos')
    //       .subscribe(todos => this.todos = todos);
    this.todoSubscription = this._store
          .subscribe(({todos, filter}) => {
            this.todos = todos;
            this.currentFilter = filter;
          });
  }

}
