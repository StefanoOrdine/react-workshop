import React, { PropTypes } from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();

      this.setState({ input: '' });
      this.props.onTodoCreation(this.state.input);
    }
  }

  render() {
    const { input } = this.state;

    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={input}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
        />
      </header>
    );
  }
}

Header.propTypes = {
  onTodoCreation: PropTypes.func.isRequired,
};
