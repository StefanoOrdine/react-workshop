import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  }

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit.bind(this)} noValidate>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={this.handleEmailChange.bind(this)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.handlePasswordChange.bind(this)}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}
