import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #000000;
  width: 100%;
  height: auto;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const StyledTitle = styled.h1`
  font-family: 'Shojumaru', cursive, sans-serif;
  font-size: 3rem;
  margin: 0 3%;
  color: #ffcb05;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #3d7dca;
  text-shadow: 3px 3px #003a70;
  cursor: pointer;
  margin-right: auto;

  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 2.3rem;
  }
`;

export const StyledNav = styled.nav`
  li,
  a {
    /*@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');*/
    font-family: 'Shojumaru', sans-serif;
    font-weight: 500;
    font-size: 22px;
    color: #edf0f1;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  ul li {
    display: inline-block;
    padding: 0 20px;
  }

  ul li a {
    transition: all 0.3s ease 0s;
    color: #ffcb05;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #3d7dca;
    text-shadow: 3px 3px #003a70;
  }

  ul li a:hover {
    color: #0088a9;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 5px;
    margin-left: -100%;
    transition: all 0.4s;

    ul {
      display: none;
      width: auto;
      background-color: red;
    }

    ul li {
      display: block;
      width: 100%;
    }
  }
`;
