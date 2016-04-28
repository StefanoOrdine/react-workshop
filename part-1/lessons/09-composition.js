function TodoList(props) {
  return React.createElement(
    "ul", null,
    props.todos.map(function(todo) {
      return React.createElement(
        TodoItem,
        {
          key: todo.label,
          label: todo.label,
          completed: todo.completed,
        }
      );
    })
  );
}

function TodoItem(props) {
  return React.createElement(
    "li",
    {
      style: {
        textDecoration: props.completed ? 'line-through' : 'none'
      }
    },
    props.label
  );
}

var todos = [
  { label: 'Buy milk', completed: true },
  { label: 'Read newspaper', completed: true },
  { label: 'Eat something', completed: false },
];

var container = document.getElementById("app");
var rootElement = React.createElement(TodoList, { todos: todos });

ReactDOM.render(rootElement, container);
