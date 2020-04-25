import { createAction, props } from "@ngrx/store";

export const create = createAction('[TODO] create',
props<{description:string}>());

export const remove = createAction('[TODO] remove',
props<{id:number}>())

export const toggle = createAction('[Todo] toggle',
props<{id:number}>());

export const edit = createAction("[TODO] edit",
props<{id:number, description:string}>());

export const toogleAll = createAction("[TODO] toggle all",
props<{completeAll:boolean}>());

export const clearCompleteds = createAction("[TODO] create completeds")