import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';

const PDPLayout = styled.div`
  /* PDP */

  position: relative;
  width: 1440px;
  height: 933px;
`;

export default class PDP extends Component {
  render() {
    return (
      <PDPLayout>
        <Header />
      </PDPLayout>
    );
  }
}
