import {
  combineReducers
} from 'redux';

import { reducer as form } from 'redux-form';
import auth from '../modules/Auth/reducer'

const rootReducer = combineReducers({
  form,
  auth,
});

export default rootReducer;
