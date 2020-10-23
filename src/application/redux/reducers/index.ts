import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';

import { AuthReducer } from '@/application/interfaces/ReducerInterface.d';

import auth from './auth';

export interface RootState {
  router: RouterState;
  auth: AuthReducer;
  // user: UserReducer;
  // user: any;
  // modal: any;
  // partner: any;
  // finance: any;
  // notification: any;
}
export const rootReducer = combineReducers<RootState>({
  router,
  auth
  // user,
  // partner,
  // finance,
  // modal,
  // notification
});
