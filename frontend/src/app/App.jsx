import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// add components here
import Home from './home';

export const history = createHistory();
const baseUrl = ""; // when game is on localhost
//const baseUrl = "Recycle-Game"; // for when game is hosted

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path={baseUrl + "/"} component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;