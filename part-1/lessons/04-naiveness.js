var container = document.getElementById("app");

function update() {
  container.innerHTML =
    "It's second <strong>" +
    new Date().getSeconds() +
    "</strong> here!";
}

setInterval(update, 1000);
update();
