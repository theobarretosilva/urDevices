import { TopLogo } from "../TopLogo/TopLogo";
import { BemVindoStyled, BtnLogarStyled, DivInputStyled, EsqueciSenhaStyled, FundoStyled, InputStyled, LabelStyled } from "./FormLogin.styles"

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
                <InputStyled type="password" placeholder="Sua senha"></InputStyled>
            </DivInputStyled>
            <EsqueciSenhaStyled>Esqueci a senha</EsqueciSenhaStyled>
            <BtnLogarStyled>Login</BtnLogarStyled>
        </FundoStyled>
    );
};