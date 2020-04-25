import { Pipe, PipeTransform } from '@angular/core';
import { FilterType } from '../filter/filter.actions';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filterState'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filterType: FilterType): Todo[] {
    switch (filterType) {
      case 'active':
        return todos.filter(x => !x.isCompleted);
      case 'completed':
        return todos.filter(x => x.isCompleted);
      default:
        return todos;
    }
  }

}
