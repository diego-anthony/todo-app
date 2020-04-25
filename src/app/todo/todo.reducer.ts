import { createReducer, on, Action } from "@ngrx/store";
import { Todo } from '../models/todo.model';
import * as todoActions from './todo.actions';

const initialStatte: Todo[] = [];

const _todoReducer = createReducer(initialStatte,
    on(todoActions.create,
        (state, { description }) => [...state, new Todo(description)]),
    on(todoActions.remove,
        (state, { id }) => state.filter(x => x.id !== id)),
    // on(todoActions.toggle,
    //     (state, { id }) => {
    //         const todo = state.find(x => x.id === id);
    //         return [...state.filter(x => x.id !== id), { ...todo, isCompleted: !todo.isCompleted }];
    //     })
    on(todoActions.toggle,
        (state, { id }) => {
            return state.map(x => {
                if (x.id === id) {
                    return { ...x, isCompleted: !x.isCompleted }
                }
                else {
                    return x;
                }
            });
        }),
    on(todoActions.edit,
        (state, { id, description }) => {
            return state.map(x => {
                if (x.id === id) {
                    return { ...x, description }
                }
                else {
                    return x;
                }
            });
        }),
    on(todoActions.toogleAll,
        (state, { completeAll }) => state.map(x => ({ ...x, isCompleted: completeAll }))
    ),
    on(todoActions.clearCompleteds,
        state => state.filter(x => !x.isCompleted))
);

export const todoReducer = (state: Todo[], action: Action) => {
    return _todoReducer(state, action);
}