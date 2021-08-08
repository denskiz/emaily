import { combineReducers } from 'redux';
// import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import formDataReducer from './formDataReducer';

export default combineReducers({
  auth: authReducer,
   formData: formDataReducer,
  surveys: surveysReducer,
});