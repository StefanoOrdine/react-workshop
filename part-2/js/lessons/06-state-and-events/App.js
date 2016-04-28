import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleIncrementClick(e) {
    e.preventDefault();

    this.setState({
      counter: this.state.counter + 1,
    });
  }

  handleDecrementClick(e) {
    e.preventDefault();

    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <p>
          <strong>{ counter }</strong> sheeps counted!
        </p>
        <p>
          <button onClick={this.handleIncrementClick.bind(this)}>
            Increment!
          </button>
          <button onClick={this.handleDecrementClick.bind(this)}>
            Decrement!
          </button>
        </p>
      </div>
    );
  }
}
