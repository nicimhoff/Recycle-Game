import types from './types';

const initialState = {
  email: "",
  password: ""
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EMAIL:
      return {
        ...state,
        email: action.email
      };
    case types.SET_PASSWORD:
      return {
        ...state,
        password: action.password
      };
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