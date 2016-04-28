function NavigationMenu(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

function Link(props) {
  return (
    <a to={props.href}>
      {props.children}
    </a>
  );
}

ReactDOM.render(<NavigationMenu />, document.getElementById("app"));
