import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>1</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a className="" href="#">Active</a>
          </li>
          <li>
            <a className="" href="#">Completed</a>
          </li>
        </ul>
      </footer>
    );
  }
}
