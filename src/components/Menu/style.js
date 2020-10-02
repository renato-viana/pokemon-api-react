import styled from 'styled-components';

export const StyledLabel = styled.label`
  padding: 5px;
  background-color: #000;
  color: #fff;
  font-family: 'Arial', Helvetica, sans-serif;
  text-align: center;
  font-size: 30px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: none;

  @media (max-width: 480px) {
    display: block;

    #bt_menu {
      /*display: none;*/
    }

    #bt_menu:checked ~ nav {
      ul {
        display: block;
      }
    }
  }
`;
