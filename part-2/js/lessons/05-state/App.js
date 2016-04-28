import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  // Invoked once, immediately after the initial rendering occurs.
  // https://facebook.github.io/react/docs/component-specs.html

  componentDidMount() {
    this.intervalId = setInterval(this.handleTick.bind(this), 1000);
  }

  // Invoked immediately before a component is unmounted from the DOM.
  // Perform any necessary cleanup in this method, such as invalidating
  // timers.

  componentDidUnmount() {
    clearInterval(this.intervalId);
  }

  handleTick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <strong>{ counter }</strong> sheeps counted!
      </div>
    );
  }
}
