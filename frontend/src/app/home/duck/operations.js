import axios from 'axios';
import actions from './actions';
import { Auth } from "aws-amplify";

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
      await Auth.signIn(email, password);
      console.log("user logged in");
      return dispatch(actions.login());
    } catch (error) {
      alert(error.message);
      return dispatch(actions.loginFail());
    }
  };
};

const createAccount = (email, password) => {
  return async dispatch => {
    try {
      await Auth.createUser(email, password);
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
