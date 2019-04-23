import types from './types';

const initialState = {
  email: "",
  password: "",
  isLoggedIn: false,
  highscore: 0,
  leaderboard: [],
  gamescore: 0
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
    case types.SET_GAMESCORE:
      return {
        ...state,
        gamescore: action.gamescore
      };
    case types.UPDATE_HIGHSCORE:
      return {
        ...state,
        highscore: action.highscore
      };
    case types.UPDATE_LEADERBOARD:
      return {
        ...state,
        leaderboard: action.leaderboard
      };
    case types.SEND_GAMESCORE:
      return {
        ...state
      };
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        highscore: action.highscore
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        email: "",
        password: ""
      };
    case types.CREATE_ACCOUNT:
      return {
        ...state,
        isLoggedIn: true,
        highscore: action.highscore
      };
    case types.CREATE_ACCOUNT_FAIL:
      return {
        ...state,
        email: "",
        password: ""
      };
    default:
      return {
        ...state
      }
  }
}

export default homeReducer;