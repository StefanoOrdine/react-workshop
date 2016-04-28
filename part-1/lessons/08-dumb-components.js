var container = document.getElementById("app");

function Timer(props) {
  return React.createElement(
    "div", null,
    "It's second ",
    React.createElement("strong", null, props.date.getSeconds()),
    " here!"
  );
}

function update() {
  var rootElement = React.createElement(Timer, { date: new Date() });
  ReactDOM.render(rootElement, container);
}

setInterval(update, 1000);
update();
