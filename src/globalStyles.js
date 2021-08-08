import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    font-weight: 300;
    //background: #101522;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
padding-right: 50px;
padding-left: 50px;
}
`;

export const Button = styled.button` 
border-radius: 4px;
background: ${({primary}) => (primary ? '#3F51B5' : '#D78A76')};
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary ? '#D78A76' : '#3F51B5')};
}

@media screen and (max-width: 960px) {
    width: 100%auto;
}
`

export default GlobalStyle;