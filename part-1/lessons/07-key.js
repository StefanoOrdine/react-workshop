/*
 The situation gets more complicated when the children are shuffled around
 (as in search results) or if new components are added onto the front of
 the list (as in streams). In these cases where the identity and state of
 each child must be maintained across render passes, you can uniquely
 identify each child by assigning it a key.
*/

var container = document.getElementById("app");

function update() {
  var model = shuffle(["First", "Second", "Third"]);

  var liElements = model.map(function(label) {
    return React.createElement("li", null, label);
  });

  var rootElement = React.createElement("ul", null, liElements);
  ReactDOM.render(rootElement, container);
}

update();
setInterval(update, 1000);




















function shuffle(array) {
  var counter = array.length;
  while (counter > 0) {
    var index = Math.floor(Math.random() * counter);
    counter--;
    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

