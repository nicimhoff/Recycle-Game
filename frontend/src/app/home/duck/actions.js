import types from './types';

const setEmail = email => ({
  type: types.SET_EMAIL,
  email
})

const setPassword = password => ({
  type: types.SET_PASSWORD,
  password
});

const login = () => ({
  type: types.LOGIN
});

const loginFail = () => ({
  type: types.LOGIN
});

const createAccount = () => ({
  type: types.CREATE_ACCOUNT
});

const createAccountFail = () => ({
  type: types.CREATE_ACCOUNT_FAIL
});

export default {
  setEmail,
  setPassword,
  login,
  createAccount,
  loginFail,
  createAccountFail
};
