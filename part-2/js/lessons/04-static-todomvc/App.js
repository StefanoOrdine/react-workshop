import React from 'react';

import TodoList from './TodoList';
import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    const todos = [
      { label: 'Buy milk', completed: true },
      { label: 'Read newspaper', completed: true },
      { label: 'Eat something', completed: false },
    ];

    return (
      <section className="todoapp">
         <div>
           <Header />
           <TodoList todos={todos} />
           <Footer />
         </div>
      </section>
    );
  }
}

