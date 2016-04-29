import React from 'react';

import TodoList from './TodoList';
import Header from './Header';
import Footer from './Footer';

const FILTERS = ['All', 'Active', 'Completed'];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      visibilityFilter: 'All',
    };
  }

  handleVisibilityFilterChange(visibilityFilter) {
    this.setState({ visibilityFilter });
  }

  handleTodoCreation(label) {
    const newTodos = this.state.todos
      .concat({
        id: new Date().getTime().toString(),
        label,
        completed: false,
      });

    this.setState({ todos: newTodos });
  }

  handleTodoToggle(id) {
    const newTodos = this.state.todos
      .map((todo) => {
        if (todo.id !== id) return todo;

        return Object.assign({}, todo, { completed: !todo.completed });
      });

    this.setState({ todos: newTodos });
  }

  handleTodoEdit(id, label) {
    const newTodos = this.state.todos
      .map((todo) => {
        if (todo.id !== id) return todo;

        return Object.assign({}, todo, { label });
      });

    this.setState({ todos: newTodos });
  }

  handleToggleAll() {
    const newTodos = this.state.todos
      .map(todo => Object.assign({}, todo, { completed: !todo.completed }));

    this.setState({ todos: newTodos });
  }

  handleTodoDestroy(id) {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({ todos: newTodos });
  }

  render() {
    const { todos, visibilityFilter } = this.state;
    const leftItems = todos
      .filter(todo => !todo.completed)
      .length;

    const visibleTodos = todos
      .filter(todo => (
        visibilityFilter === 'All' ?
          true :
          (
            visibilityFilter === 'Completed' ?
              todo.completed :
              !todo.completed
          )
      ));

    return (
      <section className="todoapp">
         <div>
           <Header onTodoCreation={this.handleTodoCreation.bind(this)} />
           <TodoList
             todos={visibleTodos}
             onToggleAll={this.handleToggleAll.bind(this)}
             onTodoToggle={this.handleTodoToggle.bind(this)}
             onTodoEdit={this.handleTodoEdit.bind(this)}
             onTodoDestroy={this.handleTodoDestroy.bind(this)}
           />
           <Footer
             leftCount={leftItems}
             filters={FILTERS}
             current={visibilityFilter}
             onChange={this.handleVisibilityFilterChange.bind(this)}
           />
         </div>
      </section>
    );
  }
}

