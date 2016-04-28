var container = document.getElementById("app");

var model = ["First", "Second", "Third"];

var liElements = model.map(function(label) {
  return React.createElement("li", null, label);
});

var rootElement = React.createElement("ul", null, liElements);

ReactDOM.render(rootElement, container);
