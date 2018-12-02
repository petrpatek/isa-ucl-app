import {FETCH_SUBJECTS_ERROR, FETCH_SUBJECTS_STARTED, FETCH_SUBJECTS_SUCCESS} from '../actions/SubjectActions';
const INITIAL_STATE = {
  items: [
    {title: 'ISA', 'id': '0', icon: 'ios-book', color: '#39CCCC'},
    {title: 'MIE', id: '1',icon: 'ios-book', color: '#0074D9'},
    {title: 'IFS', 'id': '2', icon: 'ios-book', color: '#FF851B'},
    {title: 'EN2', id: '3',icon: 'ios-book', color: '#DDDDDD'},
    {title: 'BIT', 'id': '4', icon: 'ios-book', color: '#AAAAAA'},
    {title: 'SEC', id: '5',icon: 'ios-book', color: '#FFDC00'},
  ],
  error: '',
  isLoading: null
};

const SubjectReducer =  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SUBJECTS_ERROR:
      return Object.assign({}, state, {error: action.payload});
    case FETCH_SUBJECTS_STARTED:
      return Object.assign({}, state, {error: '', isLoading: true});
    case FETCH_SUBJECTS_SUCCESS:
      return Object.assign({}, state, {error: '', isLoading: false, items: [].concat(action.payload)});
    default:
      return state;
  }
};

export default SubjectReducer;
