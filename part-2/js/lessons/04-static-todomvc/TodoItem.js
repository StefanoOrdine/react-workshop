import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    const { completed, label } = this.props;

    return (
      <li className={completed && 'completed'}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
          />
          <label>{label}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value={label} />
      </li>
    );
  }
}

TodoItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
};
