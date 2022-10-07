import { FormCadastro } from "../FormCadastro/FormCadastro"
import { TopLogo } from "../TopLogo/TopLogo"
import { BemVindoStyled, MainFundoCadastroStyled, MainGeralStyled, PCadastreStyled } from "./MainCadastro.styles"

export const MainCadastro = () => {
    
    return(
        <MainGeralStyled>
            <MainFundoCadastroStyled>
                <TopLogo />
                <BemVindoStyled>Bem vindo(a)!</BemVindoStyled>
                <PCadastreStyled>Cadastre-se para poder usar o nosso serviço!</PCadastreStyled>
                <FormCadastro />
            </MainFundoCadastroStyled>
        </MainGeralStyled>
    )
}