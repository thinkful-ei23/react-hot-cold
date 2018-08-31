import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
  return (
    <section>
      <h2 id="feedback" style={{ backgroundColor: props.feedback.color }}>
        {props.feedback.message}
      </h2>
      <GuessForm
        value={props.value}
        change={props.change}
        submit={props.submit}
      />
    </section>
  );
}
