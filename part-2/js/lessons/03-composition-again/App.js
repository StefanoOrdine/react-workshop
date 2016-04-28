import React from 'react';
import TodoList from './TodoList';

export default class App extends React.Component {
  render() {
    const todos = [
      { label: 'Buy milk', completed: true },
      { label: 'Read newspaper', completed: true },
      { label: 'Eat something', completed: false },
    ];

    return <TodoList todos={todos} />;
  }
}

