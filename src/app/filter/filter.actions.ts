import { props, createAction } from '@ngrx/store';

export type FilterType = 'all' | 'active' | 'completed';

export const setFilter = createAction('[Filter] set filter',
    props<{ filterType: FilterType }>());