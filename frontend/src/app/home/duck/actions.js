import types from './types';

const setSanity = sanity => ({
  type: types.SET_SANITY,
  sanity
});

const setGameover = gameover => ({
  type: types.SET_GAMEOVER,
  gameover
});

const setEmail = email => ({
  type: types.SET_EMAIL,
  email
});

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

const sendGamescore = gamescore => ({
  type: types.SEND_GAMESCORE,
  gamescore
});

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
  setSanity,
  setGameover,
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
