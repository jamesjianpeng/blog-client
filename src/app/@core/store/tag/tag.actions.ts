import { createAction, props } from '@ngrx/store';
import { ITag } from '@smartblog/models';

export const changeType = '[Tag Component] Change';

export const change = createAction(
  changeType,
  props<ITag>()
);
export const reset = createAction('[Tag Component] Reset');
