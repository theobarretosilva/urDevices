import styled from "styled-components";

export const DivGeralLoginStyled = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 3.5%;
    margin-bottom: 3%;
`

export const FundoStyled = styled.main`
    background: white;
    border-radius: 30px;
    width: 35%;
    margin-top: 1.2%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ConteudoStyled = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const BemVindoStyled = styled.h1`
    font-family: 'Inter' sans-serif;
    font-weight: 600;
    font-size: 26px;
    color: black;
    margin-top: 4%;
    text-align: start;
`

export const DivInputStyled = styled.div`
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    text-align: start;
`

export const LabelStyled = styled.label`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 19px;
    color: black;
    text-align: start;
    display: flex;
`

export const EsqueciSenhaStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: black;
    margin-top: 5%;
    cursor: pointer;
    text-align: start;
    width: 45%;

    :hover{
        color: #22577A;
        text-decoration: underline;
    }
`

export const BtnLogarStyled = styled.button`
    background: #22577A;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 21px;
    color: white;
    border: none;
    cursor: pointer;
    width: 80%;
    height: 44px;
    margin-top: 5%;

    :hover{
        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
    }
`

export const PCadastreseStyled = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: black;
    margin-top: 7%;
    margin-bottom: 4%;
`

export const SpanCadastreseStyled = styled.span`
    color: #22577A;
    cursor: pointer;

    :hover{
        text-decoration: underline;
    }
`

export const InputLoginStyled = styled.input`
    background: white;
    border: 2px solid #38A3A5;
    border-radius: 5px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: black;
    height: 36px;
    width: 100%;
`