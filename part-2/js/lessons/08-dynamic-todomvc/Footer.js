import React, { PropTypes } from 'react';

export default class Footer extends React.Component {
  handleClick(filter, e) {
    e.preventDefault();
    this.props.onChange(filter);
  }

  renderFilter(filter) {
    const { current } = this.props;

    return (
      <li key={filter}>
        <a
          href="#"
          className={ current === filter && 'selected' }
          onClick={this.handleClick.bind(this, filter)}
        >
          {filter}
        </a>
      </li>
    );
  }

  render() {
    const { filters, leftCount } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{leftCount}</strong> item left
        </span>
        <ul className="filters">
          {
            filters.map(this.renderFilter, this)
          }
        </ul>
      </footer>
    );
  }
}

Footer.propTypes = {
  filters: PropTypes.array.isRequired,
  current: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  leftCount: PropTypes.number.isRequired,
};
