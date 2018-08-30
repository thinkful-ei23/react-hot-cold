import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
      guesses: [],
      count: 0,
      modal: false,
      answer: Math.floor(Math.random() * 100) + 1,
      feedback: 'Guess, fool!'
    };
  }

  handleChange(e) {
    this.setState({ guess: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1,
      guesses: [...this.state.guesses, this.state.guess]
    });
    let difference = Math.abs(this.state.guess - this.state.answer);

    if (difference < 10 && difference > 0) {
      this.setState({
        feedback: 'You so hot, baby! We cooking now!'
      });
      document.getElementById('feedback').style.backgroundColor = '#d13065';
    } else if (difference === 0) {
      this.setState({
        feedback:
          "Momma didn't raise no fool! You've won! Time to enjoy some spicy jumbilaya!"
      });
      document.getElementById('feedback').style.backgroundColor = 'red';
    } else if (difference >= 10 && difference < 20) {
      this.setState({
        feedback: "You've found the matches! Now build a fire!"
      });
      document.getElementById('feedback').style.backgroundColor = '#5710b5';
    } else if (difference >= 20 && difference < 30) {
      this.setState({
        feedback: "You're oven has broken! Lukewarm soup all around!"
      });
      document.getElementById('feedback').style.backgroundColor = '#37b23b';
    } else if (difference >= 30 && difference < 40) {
      this.setState({
        feedback: 'No soup for you! Back in the cold you go!'
      });
      document.getElementById('feedback').style.backgroundColor = '#ceb744';
    } else {
      this.setState({
        feedback: "Please, sir, some soup? It's cold out here."
      });
      document.getElementById('feedback').style.backgroundColor = '#0077ff';
    }
    e.target.reset();
  }

  showModal(e) {
    this.setState({
      modal: true
    });
  }

  hideModal(e) {
    this.setState({
      modal: false
    });
  }

  resetGame(e) {
    this.setState({
      guess: '',
      guesses: [],
      count: 0,
      modal: false,
      answer: Math.floor(Math.random() * 100) + 1,
      feedback: 'Guess, fool!'
    });
  }

  render() {
    return (
      <div>
        <Header
          reset={e => this.resetGame(e)}
          modal={this.state.modal}
          show={e => this.showModal(e)}
          hide={e => this.hideModal(e)}
        />
        <GuessSection
          value={this.guess}
          change={e => this.handleChange(e)}
          submit={e => this.handleSubmit(e)}
          feedback={this.state.feedback}
        />
        <GuessCount count={this.state.count} />
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }
}
