import { Link } from "react-router-dom"
import { LogoP } from "../LogoP/LogoP"
import { BtnStartStyled, DivTextBtnStyled, DivTopStyled, FundoSplashPage, ImgBtnStyled, PLoginStyled, Text1Styled, Text2Styled } from "./AsideSplashPage.styles"

export const AsideSplashPage = () => {
    return(
        <FundoSplashPage>
            <DivTopStyled>
                <LogoP />
                <Link to="/login"><PLoginStyled>Login</PLoginStyled></Link>
            </DivTopStyled>
            <DivTextBtnStyled>
                <Text1Styled>Gerencie os seus<br />dispositivos de<br />qualquer lugar!</Text1Styled>
                <Text2Styled>Interaja com eles e gerencie!</Text2Styled>
                <Link to="/cadastroUsu" style={{ textDecoration: 'none' }}><BtnStartStyled>Vamos começar!<ImgBtnStyled src="../../src/assets/imgs/setaDireita.png"/></BtnStartStyled></Link>
            </DivTextBtnStyled>
        </FundoSplashPage>
    )
}