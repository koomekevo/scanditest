import React, { Component } from 'react'
import styled from 'styled-components'


const Container = styled.div`
  /* Surface */
  
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  
  /* --c-white */
  
  background: #FFFFFF;
  `
export default class Navbar extends Component {
  render() {
    return (
      <Container>
        navbar
      </Container>
    )
  }
}
