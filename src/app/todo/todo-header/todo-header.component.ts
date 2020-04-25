import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as todoActions from 'src/app/todo/todo.actions';
import { AppState } from '../../models/app-state.model';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {

  todoControl: FormControl;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.todoControl = new FormControl('', Validators.required);
  }

  addTodo() {
    if(this.todoControl.valid){
      const description = this.todoControl.value;
      this._store.dispatch(todoActions.create({ description }));
      this.todoControl.reset();
    }
  }

}
