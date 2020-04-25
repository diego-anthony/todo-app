import { createReducer, on, Action } from "@ngrx/store";
import * as filterActions from './filter.actions';
import { FilterType } from './filter.actions';

const initialState: FilterType = 'all';

const _filterReducer = createReducer(initialState,
    on(filterActions.setFilter, (state, { filterType }) => filterType)
)

export const filterReducer = (state: FilterType, action: Action) => _filterReducer(state, action);