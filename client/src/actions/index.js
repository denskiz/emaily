import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  // in production there is no proxy and a request to api/current_user
  // goes directly
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  // const res = await axios.post('/api/surveys', values);

  // history.push('/surveys');
  // dispatch({ type: FETCH_USER, payload: res.data });
  axios
    .post('/api/surveys', values)
    .then(res => {
      history.push('./');
      dispatch({ type: FETCH_USER, payload: res.data });
    })
    .catch(error => {
      if (error.request.status === 403) {
        alert('You do not have enough credits to send a survey');
        history.push('/credits');
      } else {
        console.log(error);
        history.push('/');
      }
    });
};

// const showError = (error, history){
//   if(error.reponse){

//   }
// }

// export const deleteSurvey = id => async dispatch => {
//   const res = await axios.post('/api/delete', id);
//   dispatch({ type: FETCH_USER, payload: res.data });
// };
