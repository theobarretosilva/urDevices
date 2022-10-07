import styled from "styled-components";

export const FundoSplashPage = styled.aside`
    background-color: #22577A;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50%;
`

export const DivTopStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 2%;
    margin-left: 6%;
    margin-right: 6%;
`

export const PLoginStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: white;
    cursor: pointer;

    :hover{
        text-decoration: underline;
    }
`

export const DivTextBtnStyled = styled.div`
    margin-left: 12%;
    margin-top: 17%;
`

export const Text1Styled = styled.h1`
    font-family: 'Arbutus Slab';
    font-weight: 400;
    font-size: 40px;
    color: white;
    margin-bottom: 0;
`

export const Text2Styled = styled.h3`
    font-family: 'Arbutus Slab', sans-serif;
    font-weight: 400;
    font-size: 22px;
    color: #38A3A5;
    margin-top: 1.5%;
`

export const BtnStartStyled = styled.button`
    background: #D7FFDB;
    border-radius: 4px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: black;
    border: none;
    padding: 2%;
    display: flex;
    align-items: center;
    cursor: pointer;

    :hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

export const ImgBtnStyled = styled.img`
    width: 20px;
    height: 20px;
    margin: 0;
    margin-left: 12px;
    padding: 0;
`