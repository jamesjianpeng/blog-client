import { createReducer, on } from '@ngrx/store';
import { change, reset } from './tag.actions';
import { ITag } from '@smartblog/models';

export const initialState: ITag = {} as ITag;

// const handleTagReducer = createReducer(initialState,
//   on(increment, state => state + 1),
//   on(decrement, state => state - 1),
//   on(reset, (state) => initialState),
// );

const handleTagReducer = createReducer(initialState,
  on(change, (state, tag) => ({...tag})),
  on(reset, (state) => initialState),
);

export function tagReducer(state, action) {
  return handleTagReducer(state, action);
}
