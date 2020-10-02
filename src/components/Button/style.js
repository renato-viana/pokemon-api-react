import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 30px 0;
`;

export const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  transition: transform 0.5s ease-in-out;

  @media only screen and (max-width: 480px) {
        width: auto;
    }

  &:hover {
    cursor: pointer;
    background-color: #d00000;
    transform: scale(1.2);
  }
`;
