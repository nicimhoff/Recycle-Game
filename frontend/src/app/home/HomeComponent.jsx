import React from 'react';
import recycle from './recycle.png';
import './HomeComponent.css';

class HomeComponent extends React.Component {  

  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      username: "",
      password: "",
      questionDisplay: "none",
      loginDisplay: "none",
      questionOne: 0,
      questionTwo: 0,
      questionThree: 0
    };
  }

  updateScore = () => {
    if (this.state.questionOne === "1") {
      this.setState(() => ({
        score: this.state.score + 1
      }));
    }
    if (this.state.questionTwo === "1") {
      this.setState(() => ({
        score: this.state.score + 1
      }));
    }
    if (this.state.questionThree === "1") {
      this.setState(() => ({
        score: this.state.score + 1
      }));
    }
  }

  onQuestionOneChange = event => {
    const answer = event.target.value;
    this.setState(() => ({ 
      questionOne: answer
    }));

    this.updateScore();
  }

  onQuestionTwoChange = event => {
    const answer = event.target.value;
    this.setState(() => ({ 
      questionTwo: answer
    }));

    this.updateScore();
  }

  onQuestionThreeChange = event => {
    const answer = event.target.value;
    this.setState(() => ({ 
      questionThree: answer
    }));

    this.updateScore();
  }

  onSubmitQuestions = () => {

    console.log(this.state.score)

    if (this.state.score < 2) {
      // set sanity to "good"
      return this.props.history.push('/game');
    } else {
      // set sanity to "evil"
      return this.props.history.push('/game');
    }
  }

  onLogin = event => {

    this.onClickWindow();

    // call function on backend to login
    // if successful, render components and set variables as needed   
  }

  onCreateAccount = () => {

    this.onClickWindow();
    // call function on backend to create account
    // if successful, render components and set variables as needed
    // automatic login
  }

  onClickPlay = () => {
    this.setState(() => ({ questionDisplay: "block" }));
  }

  onClickLogin = () => {
    this.setState(() => ({ loginDisplay: "block" }));
  }

  onClickWindow = () => {
    this.setState(() => ({ loginDisplay: "none" }));
    this.setState(() => ({ questionDisplay: "none" }));
  }

  render() {
    return (
      <div className="home-container">
        <header className="header">
          <img src={recycle} alt="Recycle Game" height="42" width="42"></img>
          <button className="header-button" onClick={this.onClickLogin}>Login</button>
        </header>
        <div className="centered">
          <h1 className="h1">Recycle Game</h1>
          <button className="body-button" onClick={this.onClickPlay}>Play Game</button>
        </div>

        <div id="questions" className="modal" style={{display: this.state.questionDisplay}}>
  
          <form className="modal-content animate" onSubmit={this.onSubmitQuestions}>

            <div className="container">
              <label for="uname"><b>Question 1</b></label>
              <select onChange={this.onQuestionOneChange} type="text" value={this.state.q1} required>
                <option value="">Yes / No</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>

              <label for="psw"><b>Question 2</b></label>
              <select onChange={this.onQuestionTwoChange} type="password" value={this.state.q2} required>
                <option value="">Yes / No</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>

              <label for="psw"><b>Question 3</b></label>
              <select onChange={this.onQuestionThreeChange} type="password" value={this.state.q3} required>
                <option value="">Yes / No</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
        
              <button type="submit">Play Game</button>
              <button type="button" onClick={this.onClickWindow}>Cancel</button>
            </div>
          </form>
        </div>

        <div id="login" className="modal" style={{display: this.state.loginDisplay}}>
  
          <form className="modal-content animate" onSubmit={this.onLogin}>

            <div className="container">
              <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required></input>

              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required></input>
        
              <button type="button" onClick={this.onLogin}>Login</button>
              <button type="button" onClick={this.onCreateAccount}>(Don't Have An Account?) Create One!</button>
              <button type="button" onClick={this.onClickWindow}>Cancel</button>
            </div>
          </form>
        </div>




      </div>
    );
  }
}

export default HomeComponent;