import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './models/app-state.model';
import { filterReducer } from './filter/filter.reducer';
import { todoReducer } from './todo/todo.reducer';

export const appReducer:ActionReducerMap<AppState> = {
    todos:todoReducer,
    filter:filterReducer
}