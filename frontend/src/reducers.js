import { combineReducers } from 'redux';
// import other reducers here
import homeReducer from './app/home/duck';

const rootReducer = combineReducers({
  home: homeReducer
});

export default rootReducer;