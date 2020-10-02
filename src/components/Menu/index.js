import React from 'react';

import { StyledLabel } from './style';

export const Menu = () => (
  <div>
    <StyledLabel htmlFor="bt_menu">
      <input type="checkbox" id="bt_menu" />
      &#9776;
    </StyledLabel>
  </div>
);
