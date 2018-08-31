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
      feedback: {
        message: 'Guess, fool!',
        color: 'gray'
      }
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
    let feedback = {};
    if (difference < 10 && difference > 0) {
      feedback = {
        ...feedback,
        message: 'You so hot, baby! We cooking now!',
        color: '#d13065'
      };
    } else if (difference === 0) {
      feedback = {
        ...feedback,
        message:
          "Momma didn't raise no fool! You've won! Time to enjoy some spicy jumbilaya!",
        color: 'red'
      };
    } else if (difference >= 10 && difference < 20) {
      feedback = {
        ...feedback,
        message: "You've found the matches! Now build a fire!",
        color: '#5710b5'
      };
    } else if (difference >= 20 && difference < 30) {
      feedback = {
        ...feedback,
        message: "You're oven has broken! Lukewarm soup all around!",
        color: '#37b23b'
      };
    } else if (difference >= 30 && difference < 40) {
      feedback = {
        ...feedback,
        message: 'No soup for you! Back in the cold you go!',
        color: '#ceb744'
      };
    } else {
      feedback = {
        ...feedback,
        message: "Please, sir, some soup? It's cold out here.",
        color: '#0077ff'
      };
    }
    this.setState({
      feedback
    });
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
