import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import * as todoActions from '../todo.actions';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../models/app-state.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  toggleControl = new FormControl(false);
  descriptionControl = new FormControl('',
    Validators.required);

  isEditing: boolean = false;

  @ViewChild('txtEdit')
  txtEdit: ElementRef;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this.descriptionControl.setValue(this.todo.description);
    this.toggleControl.setValue(this.todo.isCompleted);
    this.toggleControl.valueChanges.subscribe(() => {
      const id = this.todo.id;
      this._store.dispatch(todoActions.toggle({ id }))
    });
  }

  removeTodo() {
    const id = this.todo.id;
    this._store.dispatch(todoActions.remove({ id }));
  }
  edit() {
    this.isEditing = true;
    this.descriptionControl.setValue(this.todo.description);
    // TODO: Review select with out timer
    setTimeout(()=>{
      this.txtEdit.nativeElement.select();
    },1);
  }
  leaveFocus() {
    this.isEditing = false;
    if (this.descriptionControl.valid && 
      this.descriptionControl.value  != this.todo.description) {
      const id = this.todo.id;
      const description = this.descriptionControl.value;
      this._store.dispatch(todoActions.edit({ id, description }))
    }
  }
}
