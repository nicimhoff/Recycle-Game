import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { homeOperations } from './duck';

const mapStateToProps = state => ({
  email: state.home.email,
  password: state.home.password,
  isLoggedIn: state.home.isLoggedIn,
  highscore: state.home.highscore,
  leaderboard: state.home.leaderboard,
  gamescore: state.home.gamescore
});

const mapDispatchToProps = dispatch => ({
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
  login: (email, password) => {
    dispatch(homeOperations.login(email, password));
  },
  createAccount: (email, password) => {
    dispatch(homeOperations.createAccount(email, password));
  }
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;