/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class CurrencySwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '$' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="$">$ USD</option>
        <option value="€">€ EUR</option>
        <option value="¥">¥ JPY</option>
      </select>
    );
  }
}

export default CurrencySwitcher;
