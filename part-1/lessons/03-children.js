var container = document.getElementById("app");

var rootElement = React.createElement(
  "div", null,
  React.createElement(
    "ul", null,
    React.createElement("li", null, "First item"),
    React.createElement("li", null, "Second item")
  ),
  React.createElement(
    "p", null,
    "This is a ",
    React.createElement("strong", null, "fucking list"),
    "! Isn't it AWESOME?"
  )
);

ReactDOM.render(rootElement, container);
