import { Logo1Styled } from "../TopLogo/TopLogo.styles"
import { Div2LogoStyled, PLogoStyled } from "./LogoP.styles"

export const LogoP = () => {
    return(
        <Div2LogoStyled>
            <Logo1Styled src="https://github.com/theobarretosilva/urDevices/blob/main/urDevices/src/assets/imgs/logo1.png?raw=true" alt="Logo Connect Lab"/>
            <PLogoStyled>urDevices</PLogoStyled>
        </Div2LogoStyled>
    )
}