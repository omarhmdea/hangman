import logo from './logo.svg';
import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';
import { Component } from 'react';
import Endgame from './components/EndGame';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "CALM",
        hint: "Your idel mood when cooding."
      },
      score: 100,
      isWin: false,
      gameOver: false
    }
  }
  selectLetter = (letter) => {
    let statusCopy = Object.assign({}, this.state);
    statusCopy.letterStatus[letter] = true

    if (statusCopy.solution.word.split('').includes(letter)) {
      statusCopy.score = statusCopy.score + 5 > 100 ? statusCopy.score : statusCopy.score + 5
    } else {
      statusCopy.score = statusCopy.score - 20
    }

    this.setState(statusCopy);

  }
  endGame = (state) => {
    let statusCopy = Object.assign({}, this.state);
    statusCopy.gameOver = true
    statusCopy.isWin = state
    this.setState(statusCopy);
  }
  restart = () => {
    let statusCopy = Object.assign({}, this.state);
    statusCopy.letterStatus = this.generateLetterStatuses()
    statusCopy.score = 100
    statusCopy.gameOver = false
    statusCopy.isWin = false
    this.setState(statusCopy);
  }

  generateLetterStatuses = () => {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  render() {
    return (
      !this.state.gameOver ?
        <div>
          <Score score={this.state.score} />
          <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} score={this.state.score} endGame={this.endGame} />
          <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
        </div> :
        <Endgame isWin={this.state.isWin} word={this.state.solution.word} restart={this.restart} />
    );
  }
}



export default App;
