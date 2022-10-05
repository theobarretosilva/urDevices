import { DivLogoStyled, Logo1Styled, NomeLogoStyled } from "./TopLogo.styles"

export const TopLogo = () => {
    return(
        <DivLogoStyled>
            <Logo1Styled src="../../src/assets/imgs/logo1.png" alt="Logo Connect Lab"/>
            <NomeLogoStyled>Connect Lab</NomeLogoStyled>
        </DivLogoStyled>
    )
}