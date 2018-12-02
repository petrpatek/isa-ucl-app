import {AUTH_USER, AUTH_STARTED, AUTH_ERROR, CONNECT_DB, AUTH_SUCCESS} from '../actions/AppActions';

const INITIAL_STATE = {
  currentUser: {
    name:{
      first: 'Petr',
      last: 'pátek'
    },
    type: 'STUDENT'
  },
  isLoggingIn: false,
  error: '',
  db: null
};

const AppReducer =  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return Object.assign({},state, {currentUser: action.payload, isLoggingIn: false});
    case AUTH_STARTED:
      return Object.assign({},state,{isLoggingIn: true, error: ''});
    case AUTH_ERROR:
      return Object.assign({},state,{error: action.payload, isLoggingIn: false});
    case AUTH_SUCCESS:
      return Object.assign({},state,{currentUser: action.payload, isLoggingIn: false});
    case CONNECT_DB:
      return Object.assign({},state,{db: action.payload});
    default:
      return state;
  }
};
export default AppReducer;
