import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink, Route, Switch } from 'react-router-dom';

const MenuBox = styled.div`
  margin-top: 1rem;
  margin-right: auto;
`

const MenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`
const MenuItem = styled.li`
  color: blue;
  margin: 0 0.7rem;
`

class UserMenu extends Component {
  render(){
    return (
      <MenuBox>
        <MenuList>
          <MenuItem>
            <NavLink to="/">메인</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="">회원가입</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="#">로그인</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="#">히오스</NavLink>
          </MenuItem>
        </MenuList>
        <Switch>
          <Route path="/" exact component={''} />
          <Route path="/about/" component={''} />
          <Route path="/users/" component={''} />
        </Switch>
      </MenuBox>

      
    )
  }
}

export default UserMenu;