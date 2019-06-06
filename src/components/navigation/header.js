import React, { Component } from 'react';
import styled from 'styled-components';
import UserMenu from './userMenu';
import ItemMenuBar from './ItemMenu';

const Container = styled.div`
  width: 80%;
  padding-right:15px;
  padding-left:15px;
  margin-right:auto;
  margin-left:auto
`


const NavHeader = styled.h1`
  text-align: center;
  color: #512772;
  padding: 1rem;
`

class Header extends Component {
  render(){
    return(
      <Container>
        <UserMenu/>
        <NavHeader>Hello world!</NavHeader>
        <ItemMenuBar/>
      </Container>
    )
  }
}

export default Header;