import React, { Component } from 'react';
import styled from 'styled-components';
import alogo from '../../assets/images/header/a-logo.svg';

// Logo Styles
const LogoLayout = styled.img.attrs({
  src: `${alogo}`,
})`
  /* a-logo */

  position: absolute;
  width: 41px;
  height: 41px;
  left: 699px;
  top: calc(50% - 41px / 2 + 4.5px);
`;
// End of Logo Styles

export default class Logo extends Component {
  render() {
    return (
      <LogoLayout />
    );
  }
}
