import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import SubjectReducer from './SubjectReducer';

export default combineReducers({
  app: AppReducer,
  subjects: SubjectReducer
});
