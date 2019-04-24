import React from 'react';
import recycle from './recycle.png';
import './HomeComponent.css';
import { Table, Thead, Th } from 'reactable';

class HomeComponent extends React.Component {  

  constructor(props) {
    super(props);

    this.state = {
      questionDisplay: "none",
      loginDisplay: "none",
      leaderboardDisplay: "none",
      endofroundDisplay: "none",
      score: 0,
      questionOne: 0,
      questionTwo: 0,
      questionThree: 0,
      name: "",
      password: ""
    };
  }

  componentDidMount() {
    this.setState(() => ({
      name: this.props.email,
      pass: this.props.password
    }));
    if (this.props.isLoggedIn === true || this.props.email !=null) {
      this.props.sendGamescore(this.props.gamescore);
      this.props.updateHighscore(this.props.email);
    }
    this.props.updateLeaderboard();
    console.log("gameover: " + this.props.gameover)
    if (this.props.gameover) {
      this.setState(() => ({
        endofroundDisplay: "block"
      }))
      this.props.setGameover(false);
    }
  }

  onQuestionOneChange = event => {
    var answer = event.target.value;
    if (answer === '0') answer = 0;
    if (answer === '1') answer = 1;
    this.setState(() => ({ 
      questionOne: answer
    }));
  }

  onQuestionTwoChange = event => {
    var answer = event.target.value;
    if (answer === '0') answer = 0;
    if (answer === '1') answer = 1;
    this.setState(() => ({ 
      questionTwo: answer
    }));
  }

  onQuestionThreeChange = event => {
    var answer = event.target.value;
    if (answer === '0') answer = 0;
    if (answer === '1') answer = 1;
    this.setState(() => ({ 
      questionThree: answer
    }));
  }

  onSubmitQuestions = () => {
    if (this.state.questionOne + this.state.questionTwo + this.state.questionThree < 2) {
      this.props.setSanity(false);
      return this.props.history.push('/game');
    } else {
      this.props.setSanity(true);
      return this.props.history.push('/game');
    }
  }

  onEmailChange = event => {
    const name = event.target.value;
    this.setState(() => ({
      name: name
    }));
  };

  onPasswordChange = event => {
    const pass = event.target.value;
    this.setState(() => ({
      pass: pass
    }));
  };

  onLogin = () => {
    this.onClickWindow();
    this.props.login(this.state.name, this.state.pass);
    this.setState(() => ({
      name: "",
      pass: ""
    }));
  }

  onCreateAccount = () => {
    this.onClickWindow();
    this.props.createAccount(this.props.email, this.props.password);
  }

  onPlayAgain = () => {
    this.setState(() => ({
      endofroundDisplay: "none",
      questionDisplay: "block"
    }))
  }

  onClickImg = () => {
    this.props.history.push("/");
  }

  onClickPlay = () => {
    this.setState(() => ({ questionDisplay: "block" }));
  }

  onClickLogin = () => {
    this.setState(() => ({ loginDisplay: "block" }));
  }

  onClickLeaderboard = () => {
    this.setState(() => ({ leaderboardDisplay: "block" }));
  }

  onClickWindow = () => {
    this.setState(() => ({ 
      loginDisplay: "none",
      questionDisplay: "none",
      leaderboardDisplay: "none",
      endofroundDisplay: "none"
    }));

    if (this.props.isLoggedIn === true) {
      this.props.updateHighscore(this.props.email);
    }
    this.props.updateLeaderboard();
  }

  onEndRound = () => {
    this.setState(() => ({ 
      endofroundDisplay: "block"
    }));
    if (this.props.isLoggedIn) {
    }
  }

  render() {
    return (
      <div className="home-container">
        <header className="header">
          <img src={recycle} onClick={this.onClickImg} alt="Recycle Game" height="42" width="42"></img>
          <button className="header-button" onClick={this.onClickLeaderboard}>Leaderboard</button>          
          <button className="header-button" onClick={this.onClickLogin}>Login</button>          
        </header>
        <div>
          <h1 className="h1">Recycle Game</h1>
          {this.props.isLoggedIn && (
            <h2>{this.props.email}</h2>
          )}
          {(this.props.isLoggedIn && this.props.email != null && this.props.email != undefined) && (
            <h3>Highscore: {this.props.highscore}</h3>
          )}
          <center>
            <button className="screen-button" onClick={this.onClickPlay}>Play Game</button>
            
          </center>
        </div>

        <div id="questions" className="modal" style={{display: this.state.questionDisplay}}>  
          <form className="modal-content animate" onSubmit={this.onSubmitQuestions}>
            <div className="container">
              <label className="question" for="uname"><b>You can save trees by recycling paper products</b></label>
              <select className="styled-select" onChange={this.onQuestionOneChange} type="text" value={this.state.q1} required>
                <option value="">True / False</option>
                <option value={1}>True</option>
                <option value={0}>False</option>
              </select>
              <label className="question" for="psw"><b>Littering isn't actually bad for the environment</b></label>
              <select className="styled-select" onChange={this.onQuestionTwoChange} type="password" value={this.state.q2} required>
                <option value="">True / False</option>
                <option value={0}>True</option>
                <option value={1}>False</option>
              </select>
              <label className="question" for="psw"><b>Everything can be recycled!</b></label>
              <select className="styled-select" onChange={this.onQuestionThreeChange} type="password" value={this.state.q3} required>
                <option value="">True / False</option>
                <option value={0}>True</option>
                <option value={1}>False</option>
              </select>        
              <button className="menu-button" type="submit">Play Game</button>
              <button className="menu-button" type="button" onClick={this.onClickWindow}>Cancel</button>
            </div>
          </form>
        </div>

        <div id="login" className="modal" style={{display: this.state.loginDisplay}}>  
          <form className="leaderboard-modal-content animate" onSubmit={this.onLogin}>
            <div className="container">
              <label for="uname"><b>Email</b></label>
              <input 
                value={this.state.name}
                onChange={event => this.onEmailChange(event)}
                type="text" 
                placeholder="Enter Username" 
                name="uname" 
                required>
              </input>
              <label for="psw"><b>Password</b></label>
              <input 
                value={this.state.pass}
                onChange={event => this.onPasswordChange(event)}
                type="password" 
                placeholder="Enter Password" 
                name="psw" 
                required></input>        
              <button className="menu-button" type="button" onClick={this.onLogin}>Login</button>
              <button className="menu-button" type="button" onClick={this.onCreateAccount}>(Don't Have An Account?) Create One!</button>
              <button className="menu-button" type="button" onClick={this.onClickWindow}>Cancel</button>
            </div>
          </form>
        </div>

        <div id="leaderboard" className="modal" style={{display: this.state.leaderboardDisplay}}>  
          <form className="leaderboard-modal-content animate">
            <div className="container">
              <Table 
                className="table"
                noDataText="No matching records found"
                itemsPerPage={10}
                data={this.props.leaderboard}>
                <Thead>
                  <Th column="email">Name</Th>
                  <Th column="score">Score</Th>
                </Thead>
              </Table>
              <button className="menu-button" type="button" onClick={this.onClickWindow}>Close</button>
            </div>            
          </form>
        </div>

        <div id="end-of-round" className="modal" style={{display: this.state.endofroundDisplay}}> 
          <form className="leaderboard-modal-content animate" onSubmit={this.onLogin}>
            <div className="container">
              <h1 className="h1-window">End Of Round</h1>
              <h2>Score: {this.props.gamescore}</h2>
              <button className="menu-button" type="button" onClick={this.onPlayAgain}>Play Again</button>
              <button className="menu-button" type="button" onClick={this.onClickWindow}>Close</button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default HomeComponent;