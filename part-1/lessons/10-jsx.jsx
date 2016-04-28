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

function TodoItem(props) {
  var textDecoration = props.completed ? 'line-through' : 'none';

  return (
    <li style={{ textDecoration: textDecoration }}>
      {props.label}
    </li>
  );
}

var todos = [
  { label: 'Buy milk', completed: true },
  { label: 'Read newspaper', completed: true },
  { label: 'Eat something', completed: false },
];

var container = document.getElementById("app");

ReactDOM.render(<TodoList todos={todos} />, container);

/*
 * npm init
 * npm install babel-cli --save-dev
 * npm install babel-preset-react --save-dev
 * ./node_modules/.bin/babel 10-jsx.js --presets react --out-file 10-jsx.compiled.js --source-maps inline
 */

