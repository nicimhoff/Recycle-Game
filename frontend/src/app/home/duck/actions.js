import types from './types';

const setEmail = email => ({
  type: types.SET_EMAIL,
  email
})

const setPassword = password => ({
  type: types.SET_PASSWORD,
  password
});

const setGamescore = gamescore => ({
  type: types.SET_GAMESCORE,
  gamescore
});

const updateHighscore = highscore => ({
  type: types.UPDATE_HIGHSCORE,
  highscore
});

const updateLeaderboard = leaderboard => ({
  type: types.UPDATE_LEADERBOARD,
  leaderboard
});

const sendGamescore = () => ({
  type: types.SEND_SCORE
})

const login = highscore => ({
  type: types.LOGIN,
  highscore
});

const loginFail = () => ({
  type: types.LOGIN
});

const createAccount = highscore => ({
  type: types.CREATE_ACCOUNT,
  highscore
});

const createAccountFail = () => ({
  type: types.CREATE_ACCOUNT_FAIL
});

export default {
  setEmail,
  setPassword,
  setGamescore,
  updateHighscore,
  updateLeaderboard,
  sendGamescore,
  login,
  createAccount,
  loginFail,
  createAccountFail
};
