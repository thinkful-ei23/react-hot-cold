import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
  if (!props.modal) {
    return (
      <header>
        <TopNav reset={props.reset} show={props.show} />
        <h1>HOT or COLD</h1>
      </header>
    );
  } else {
    return (
      <header>
        <InfoModal hide={props.hide} />
      </header>
    );
  }
}
