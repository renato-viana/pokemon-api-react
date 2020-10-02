import React from 'react';

import { StyledContainer, StyledButton } from './style';

export const Button = ({ handleClick }) => (
  <StyledContainer>
    <StyledButton onClick={handleClick}>More Pokemons</StyledButton>
  </StyledContainer>
);
