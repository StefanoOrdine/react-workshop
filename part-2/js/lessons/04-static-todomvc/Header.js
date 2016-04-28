import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value=""
        />
      </header>
    );
  }
}
