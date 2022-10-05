import { TopLogo } from "../TopLogo/TopLogo";
import { BemVindoStyled, DivInputStyled, FundoStyled, LabelStyled } from "./FormLogin.styles"

export const FormLogin = () => {
    return(
        <FundoStyled>
            <TopLogo />
            <BemVindoStyled>Bem-vindo(a) de volta!</BemVindoStyled>
            <DivInputStyled>
                <LabelStyled>E-mail</LabelStyled>
                
            </DivInputStyled>
        </FundoStyled>
    );
};