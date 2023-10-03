import React from "react";
import { Link } from "react-router-dom";
import styled from '@emotion/styled';
import { space, typography, color } from 'styled-system';

// Create a styled header container
const HeaderContainer = styled.header`
  background-color: #333; /* Background color */
  color: white; /* Text color */
  padding: 20px 0; /* Padding at the top and bottom */
  text-align: center; /* Center-align text */
`;

// Create a styled navigation list
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

// Create a styled navigation item
const NavItem = styled.li`
  margin: 0 20px;
`;

// Create a styled navigation link
const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: white; /* Link text color */
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #00aaff; /* Change link color on hover */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Simple Music App</h1>
      <NavList>
        <NavItem>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/create">Create Songs</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/about">About</NavLinkStyled>
        </NavItem>
        
      </NavList>
    </HeaderContainer>
  );
};

export default Header;
