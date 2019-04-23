import types from './types';

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
  login,
  createAccount,
  loginFail,
  createAccountFail
};
