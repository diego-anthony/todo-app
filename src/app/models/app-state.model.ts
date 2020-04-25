import { Todo } from './todo.model';
import { FilterType } from '../filter/filter.actions';
export class AppState{
    todos:Todo[];
    filter:FilterType;
}