import { combineReducers } from 'redux';

import userReducer from './users/reducer';
import postReducer from './post/reducer';
import tagsReducer from './tags/reducer';

const reducers = combineReducers({
  userReducer, postReducer, tagsReducer,
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
