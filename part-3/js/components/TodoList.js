import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  handleToggle(id) {
    this.props.onTodoToggle(id);
  }

  handleDestroy(id) {
    this.props.onTodoDestroy(id);
  }

  handleEdit(id, label) {
    this.props.onTodoEdit(id, label);
  }

  renderTodoItem(todo, index) {
    return (
      <TodoItem
        key={index}
        {...todo}
        onToggle={this.props.onTodoToggle.bind(this, todo.id)}
        onDestroy={this.props.onTodoDestroy.bind(this, todo.id)}
        onEdit={this.props.onTodoEdit.bind(this, todo.id)}
      />
    );
  }

  render() {
    const { todos, onToggleAll } = this.props;

    const allCompleted =
      todos.length > 0 &&
      todos.every(todo => todo.completed);

    return (
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          checked={false}
          onChange={onToggleAll}
          checked={allCompleted}
        />
        <ul className="todo-list">
          { todos.map(this.renderTodoItem, this) }
        </ul>
      </section>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
  onTodoToggle: React.PropTypes.func.isRequired,
  onTodoEdit: React.PropTypes.func.isRequired,
  onTodoDestroy: React.PropTypes.func.isRequired,
  onToggleAll: React.PropTypes.func.isRequired,
};

