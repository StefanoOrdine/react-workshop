var container = document.getElementById("app");

function update() {
  var rootElement = React.createElement(
    "div", null,
    "It's second ",
    React.createElement("strong", null, new Date().getSeconds()),
    " here!"
  );

  ReactDOM.render(rootElement, container);
}

setInterval(update, 1000);
update();
