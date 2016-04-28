function TodoList(props) {
  return (
    <ul>
      {
        props.todos.map(function(todo) {
          return <TodoItem key={todo.label} {...todo} />;
        })
      }
    </ul>
  );
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
};

function TodoItem(props) {
  var textDecoration = props.completed ? 'line-through' : 'none';

  return (
    <li style={{ textDecoration: textDecoration }}>
      {props.label}
    </li>
  );
}

TodoItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
};

var todos = [
  { label: 'Buy milk', completed: true },
  { label: 'Read newspaper', completed: true },
  { label: 'Eat something', completed: false },
];

var container = document.getElementById("app");

ReactDOM.render(<TodoList todos={todos} />, container);
