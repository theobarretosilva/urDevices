import { TopLogo } from "../TopLogo/TopLogo";
import { BemVindoStyled, BtnLogarStyled, DivInputStyled, EsqueciSenhaStyled, FundoStyled, InputStyled, LabelStyled, PCadastreseStyled, SpanCadastreseStyled, DivGeralLoginStyled } from "./FormLogin.styles"

export const FormLogin = () => {
    return(
        <DivGeralLoginStyled>
            <FundoStyled>
                <TopLogo />
                <BemVindoStyled>Bem-vindo(a) de volta!</BemVindoStyled>
                <form>
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
                </form>
                <PCadastreseStyled>Não tem uma conta? <SpanCadastreseStyled>Cadastre-se</SpanCadastreseStyled></PCadastreseStyled>
            </FundoStyled>
        </DivGeralLoginStyled>
        
    );
};