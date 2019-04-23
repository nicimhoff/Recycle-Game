import axios from 'axios';
import actions from './actions';

const setEmail = email => {
  return dispatch => {
    return dispatch(actions.setEmail(email));
  };
};

const setPassword = password => {
  return dispatch => {
    return dispatch(actions.setPassword(password));
  };
};

const login = (email, password) => {
  return async dispatch => {
    try {
      const response = await axios.post(
        // call route
        {
          ...(email, password) // sends loginData
        }
      );
      return dispatch(actions.login());
    } catch (error) {
      return dispatch(actions.loginFail());
    }
  };
};

const createAccount = (email, password) => {
  return async dispatch => {
    try {
      const response = await axios.post(
        // call route
        {
          ...(email, password) // sends loginData
        }
      );
      return dispatch(actions.createAccount());
    } catch (error) {
      return dispatch(actions.createAccountFail());
    }
  };
};

export default {
  setEmail,
  setPassword,
  login,
  createAccount
};
