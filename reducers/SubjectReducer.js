import {FETCH_SUBJECTS_ERROR, FETCH_SUBJECTS_STARTED, FETCH_SUBJECTS_SUCCESS} from '../actions/SubjectActions';
const INITIAL_STATE = {
  items: [],
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
