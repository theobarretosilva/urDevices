import { Link } from "react-router-dom";
import { TopLogo } from "../TopLogo/TopLogo";
import { BemVindoStyled, BtnLogarStyled, DivInputStyled, EsqueciSenhaStyled, FundoStyled, InputLoginStyled, LabelStyled, PCadastreseStyled, SpanCadastreseStyled, DivGeralLoginStyled, ConteudoStyled } from "./FormLogin.styles"

export const FormLogin = () => {
    return(
        <DivGeralLoginStyled>
            <FundoStyled>
                <ConteudoStyled>
                    <TopLogo />
                    <BemVindoStyled>Bem-vindo(a) de volta!</BemVindoStyled>
                    <form style={{width: '70%'}}>
                        <DivInputStyled>
                            <LabelStyled>E-mail</LabelStyled>
                            <InputLoginStyled type="email" placeholder="Seu email"/>
                        </DivInputStyled>
                        <DivInputStyled>
                            <LabelStyled>Senha</LabelStyled>
                            <InputLoginStyled type="password" placeholder="Sua senha"></InputLoginStyled>
                        </DivInputStyled>
                        <EsqueciSenhaStyled>Esqueci a senha</EsqueciSenhaStyled>
                        <BtnLogarStyled>Login</BtnLogarStyled>
                    </form>
                    <PCadastreseStyled>Não tem uma conta? <Link to={"/cadastroUsu"} style={{textDecoration: 'none'}}><SpanCadastreseStyled>Cadastre-se</SpanCadastreseStyled></Link></PCadastreseStyled>
                </ConteudoStyled>
            </FundoStyled>
        </DivGeralLoginStyled>
        
    );
};