import { Component, OnInit } from '@angular/core';
import { FilterType } from 'src/app/filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app-state.model';
import * as filterActions from "../../filter/filter.actions";
import * as todoActions from "../todo.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filters: FilterType[] = ['all', 'active', 'completed'];
  currentFilter: FilterType = 'all';
  counterPendings: number = 0;
  counterCompleteds: number = 0;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    // this._store.select('filter').subscribe( filter => this.currentFilter = filter);
    this._store.subscribe(({ todos, filter }) => {
      this.currentFilter = filter;
      this.counterPendings = todos.filter(x => !x.isCompleted).length;
      this.counterCompleteds = todos.filter(x => x.isCompleted).length;
    });
  }

  setFilter(filterType: FilterType) {
    this.currentFilter = filterType;
    this._store.dispatch(filterActions.setFilter({ filterType }));
  }

  clearCompleteds() {
    if (this.counterCompleteds > 0) {
      this._store.dispatch(todoActions.clearCompleteds());
    }
  }

}
