import axios from 'axios';
import actions from './actions';
import { Auth } from "aws-amplify";

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
  login,
  createAccount
};
