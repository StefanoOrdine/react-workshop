import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    const { completed, label } = this.props;

    const textDecoration = completed ? 'line-through' : 'none';

    return (
      <li style={{ textDecoration }}>
        {label}
      </li>
    );
  }
}

TodoItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
};
