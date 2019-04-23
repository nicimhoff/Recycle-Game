import types from './types';
import homeReducer from '.';

const initialState = {
  email: "",
  password: ""
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        email: "",
        password: ""
      }
    case types.CREATE_ACCOUNT:
      return {
        ...state
      }
    case types.CREATE_ACCOUNT_FAIL:
      return {
        ...state,
        email: "",
        password: ""
      }
  }
}

export default homeReducer;