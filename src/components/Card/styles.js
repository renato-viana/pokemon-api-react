import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    height: auto;
    margin: 10px auto;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 10px;
    background-image: linear-gradient(to right, #fff , #003a70);

    @media only screen and (max-width: 480px) {
        width: auto;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 220px;
    height: auto;
    text-align: center;
    margin: 10px 10px;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 10px;
    background-image: linear-gradient(to right, #003A70, #D00000);

    @media only screen and (max-width: 480px) {
       width: 100%;
    }
`

export const Img = styled.img`
    width: auto;
    height: auto;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: #FFFFFF;
    Svg {
        width: 20%;
        height: 20%;
        background-color: red;
    }
`

export const Id = styled.p`
    font-size: 2em;
    font-weight: bold;
    color: #FFCB05;
`

export const Text = styled.p`
    font-size: 1em;
    font-weight: bold;
    color: #3D7DCA;
    text-transform: capitalize;

`
