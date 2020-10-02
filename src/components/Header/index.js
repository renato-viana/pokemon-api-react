import React from 'react';

import { Link } from 'react-router-dom';
import { StyledHeader, StyledTitle, StyledNav } from './styles';

import { Menu } from '../Menu';

export const Header = () => (
  <StyledHeader>
    <Menu />
    <StyledTitle>Pokémon</StyledTitle>
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
      </ul>
      <hr />
    </StyledNav>
  </StyledHeader>
);
