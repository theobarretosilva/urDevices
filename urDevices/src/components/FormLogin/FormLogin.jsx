import { TopLogo } from "../TopLogo/TopLogo";
import { BemVindoStyled, BtnLogarStyled, DivInputStyled, EsqueciSenhaStyled, FundoStyled, InputStyled, LabelStyled, LinhaStyled, PGoogleStyled, DivLoginGoogleStyled } from "./FormLogin.styles"
import GoogleLogin from 'react-google-login';

export const FormLogin = () => {

    const responseGoogle = (response) => {
        console.log(response)
    }

    const googleErro = () => {

    }

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
            <DivLoginGoogleStyled>
                <LinhaStyled />
                <PGoogleStyled>Ou faça login com a sua conta Google</PGoogleStyled>
                <LinhaStyled />
            </DivLoginGoogleStyled>
            <GoogleLogin 
                clientId="927587492473-mp14b7tkb2gn308n52qpv9ioda18k1r4.apps.googleusercontent.com"
                buttonText="Continuar com o Google"
                onSuccess={responseGoogle}
                onFailure={googleErro}
            />
        </FundoStyled>
    );
};