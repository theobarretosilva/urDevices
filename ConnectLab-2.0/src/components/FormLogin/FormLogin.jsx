import { TopLogo } from "../TopLogo/TopLogo";
import { BemVindoStyled, DivInputStyled, DivSenhaStyled, FundoStyled, InputStyled, LabelStyled } from "./FormLogin.styles"

export const FormLogin = () => {
    return(
        <FundoStyled>
            <TopLogo />
            <BemVindoStyled>Bem-vindo(a) de volta!</BemVindoStyled>
            <DivInputStyled>
                <LabelStyled>E-mail</LabelStyled>
                <InputStyled type="email" placeholder="Seu email"/>
            </DivInputStyled>
            <DivInputStyled>
                <LabelStyled>Senha</LabelStyled>
                <DivSenhaStyled>
                   <InputStyled type="password" placeholder="Sua senha"/> 
                   <img src=""/>
                </DivSenhaStyled>
            </DivInputStyled>
        </FundoStyled>
    );
};