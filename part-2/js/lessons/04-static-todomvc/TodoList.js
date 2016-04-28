import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  renderTodoItem(todo) {
    return <TodoItem key={todo.label} {...todo} />;
  }

  render() {
    const { todos } = this.props;

    return (
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          checked={false}
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
};

