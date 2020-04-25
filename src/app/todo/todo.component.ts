import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as todoActions from "./todo.actions";
import { AppState } from '../models/app-state.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  completeAll = false;

  constructor(private _store:Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll(){
    this.completeAll = !this.completeAll;
    this._store.dispatch(todoActions.toogleAll({completeAll:this.completeAll}));
  }

}
