import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
  return (
    <form onSubmit={props.submit}>
      <input
        type="number"
        name="userGuess"
        id="userGuess"
        className="text"
        min="1"
        max="100"
        maxLength="3"
        autoComplete="off"
        placeholder="Enter your Guess"
        required
        value={props.value}
        onChange={props.change}
      />
      <input
        type="submit"
        id="guessButton"
        className="button"
        name="submit"
        value="Guess"
      />
    </form>
  );
}
