import axios from 'axios';
import actions from './actions';
import { Auth } from "aws-amplify";

const setSanity = sanity => {
  return dispatch => {
    console.log(sanity)
    return dispatch(actions.setSanity(sanity));
  };
};

const setGameover = gameover => {
  return dispatch => {
    return dispatch(actions.setGameover(gameover));
  };
};

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

const setGamescore = gamescore => {
  return dispatch => {
    return dispatch(actions.setGamescore(gamescore));
  };
}

const updateHighscore = email => {
  return async dispatch => {
    try {
      const response = await axios.get(
        `https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/getUser?email=${email}`
      );
      console.log ("updating highscore: " + response)
      return dispatch(actions.updateHighscore(response.data.Items[0].score));
    } catch (error) {
      return dispatch(actions.updateHighscore(0));
    }
  };
}

const updateLeaderboard = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        `https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/getLeaderboard`
      );
      var leaderboard = [];
      response.data.forEach((element) => {
        leaderboard.push(element[0]);
      });
      
      return dispatch(actions.updateLeaderboard(leaderboard));
    } catch (error) {
      return dispatch(actions.updateLeaderboard([]));
    }
  };
}

const sendGamescore = (email, gamescore) => {
  return async dispatch => {
    try {
      await axios.get(
        `https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/updateScore?email=${email}&score=${gamescore}`
      )
      return dispatch(actions.sendGamescore(gamescore));
    } catch (error) {
      return dispatch(actions.sendGamescore(gamescore));
    }
  };
}

const login = (email, password) => {
  return async dispatch => {
    try {
      await Auth.signIn(email, password);
      const response = await axios.get(
        `https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/getUser?email=${email}`
      );
      console.log(response.data.Items[0].score)
      return dispatch(actions.login(response.data.Items[0].score));
    } catch (error) {
      alert(error.message);
      return dispatch(actions.loginFail());
    }
  };
};

const createAccount = (email, password) => {
  return async dispatch => {
    try {
      await Auth.signUp({
        username: email,
        password: password
      });
      await Auth.signIn(email, password);
      const response = await axios.get(
        `https://aqq11p2sd0.execute-api.us-east-2.amazonaws.com/default/getUser?email=${email}`
      );
      return dispatch(actions.createAccount(response.data.Items[0].score));
    } catch (error) {
      alert(error.message);
      return dispatch(actions.createAccountFail());
    }
  };
};

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
  createAccount
};
