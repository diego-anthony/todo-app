// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

// Components
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoComponent } from './todo.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [TodoHeaderComponent, TodoListComponent, TodoItemComponent, TodoFooterComponent, TodoComponent, FilterPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[TodoComponent]
})
export class TodoModule { }
