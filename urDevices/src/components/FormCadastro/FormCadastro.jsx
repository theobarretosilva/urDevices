import { InputStyled, LabelStyled } from "../FormLogin/FormLogin.styles"
import { DivDentroInputStyled, DivGeralStyled, DivInputStyled } from "./FormCadastro.styles"

export const FormCadastro = () => {
    return(
        <DivGeralStyled>
            <form>
                <DivInputStyled>
                    <DivDentroInputStyled>
                        <LabelStyled>Primeiro nome *</LabelStyled>
                        <InputStyled type={"text"} placeholder="Ex: Théo"/>
                    </DivDentroInputStyled>
                    <DivDentroInputStyled>
                        <LabelStyled>Sobrenome *</LabelStyled>
                        <InputStyled type={"text"} placeholder="Ex: Albuquerque da Silva"/>
                    </DivDentroInputStyled>
                </DivInputStyled>
            </form>
        </DivGeralStyled>
    )
}