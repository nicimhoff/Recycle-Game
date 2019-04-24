import { connect } from 'react-redux';
import GameComponent from './GameComponent';
import { homeOperations } from './duck';

const mapStateToProps = state => ({
  email: state.home.email,
  password: state.home.password,
  isLoggedIn: state.home.isLoggedIn,
  highscore: state.home.highscore,
  leaderboard: state.home.leaderboard,
  gamescore: state.home.gamescore,
  sanity: state.home.sanity,
  gameover: state.home.gameover
});

const mapDispatchToProps = dispatch => ({
  setSanity: sanity => {
    dispatch(homeOperations.setSanity(sanity));
  },
  setGameover: gameover => {
    dispatch(homeOperations.setGameover(gameover));
  },
  setEmail: email => {
    dispatch(homeOperations.setEmail(email));
  },
  setPassword: password => {
    dispatch(homeOperations.setPassword(password));
  },
  setGamescore: gamescore => {
    dispatch(homeOperations.setGamescore(gamescore));
  },
  updateHighscore: email => {
    dispatch(homeOperations.updateHighscore(email));
  },
  updateLeaderboard: () => {
    dispatch(homeOperations.updateLeaderboard());
  },
  sendGamescore: (email, gamescore) => {
    dispatch(homeOperations.sendGamescore(email, gamescore));
  },
  login: (email, password) => {
    dispatch(homeOperations.login(email, password));
  },
  createAccount: (email, password) => {
    dispatch(homeOperations.createAccount(email, password));
  }
});

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameComponent);

export default GameContainer;