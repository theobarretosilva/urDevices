import { Link } from "react-router-dom"
import { FormCadastro } from "../FormCadastro/FormCadastro"
import { SpanCadastreseStyled } from "../FormLogin/FormLogin.styles"
import { TopLogo } from "../TopLogo/TopLogo"
import { BemVindoStyled, FacaLoginStyled, MainFundoCadastroStyled, MainGeralStyled, PCadastreStyled } from "./MainCadastro.styles"

export const MainCadastro = () => {
    
    return(
        <MainGeralStyled>
            <MainFundoCadastroStyled>
                <TopLogo />
                <BemVindoStyled>Bem vindo(a)!</BemVindoStyled>
                <PCadastreStyled>Cadastre-se para poder usar o nosso serviço!</PCadastreStyled>
                <FormCadastro />
                <FacaLoginStyled>Já tem uma conta? <Link to={"/login"} style={{textDecoration: 'none'}}><SpanCadastreseStyled>Faça login!</SpanCadastreseStyled></Link></FacaLoginStyled>
            </MainFundoCadastroStyled>
        </MainGeralStyled>
    )
}