import React from 'react';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editActive: false, input: '' };
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();

      this.setState({ input: '', editActive: false });
      this.props.onEdit(this.state.input);
    }
  }

  handleEditClick(e) {
    e.preventDefault();

    this.setState({
      input: this.props.label,
      editActive: true,
    });
  }

  handleToggle() {
    this.props.onToggle();
  }

  render() {
    const {
      editActive,
      input,
    } = this.state;

    const {
      completed,
      label,
      onDestroy,
    } = this.props;

    const className = editActive ?
      'editing' :
      (completed ? 'completed' : '');

    return (
      <li className={className}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={this.handleToggle.bind(this)}
          />
          <label onClick={this.handleEditClick.bind(this)}>
            {label}
          </label>
          <button
            className="destroy"
            onClick={onDestroy}
          />
        </div>
        <input
          className="edit"
          value={input}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  onDestroy: React.PropTypes.func.isRequired,
};
