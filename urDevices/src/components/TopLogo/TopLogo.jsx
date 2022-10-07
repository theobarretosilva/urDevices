import { DivLogoStyled, Logo1Styled, NomeLogoStyled } from "./TopLogo.styles"

export const TopLogo = () => {
    return(
        <DivLogoStyled>
            <Logo1Styled src="https://github.com/theobarretosilva/urDevices/blob/main/urDevices/src/assets/imgs/logo1.png?raw=true" alt="Logo Connect Lab"/>
            <NomeLogoStyled>urDevices</NomeLogoStyled>
        </DivLogoStyled>
    )
}