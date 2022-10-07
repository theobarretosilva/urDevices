import { BtnLogarStyled, InputStyled, LabelStyled } from "../FormLogin/FormLogin.styles"
import { Div1Styled, DivDentroInputStyled, DivGeralStyled, DivInputStyled, SelectStyled } from "./FormCadastro.styles"

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
                <DivInputStyled>
                    <DivDentroInputStyled>
                        <LabelStyled>E-mail *</LabelStyled>
                        <InputStyled type={"email"} placeholder="Ex: email@teste.com" />
                    </DivDentroInputStyled>
                    <DivDentroInputStyled>
                        <LabelStyled>Link da foto de perfil</LabelStyled>
                        <InputStyled type={"url"} placeholder="Link da sua foto de perfil" />
                    </DivDentroInputStyled>
                </DivInputStyled>
                <DivInputStyled>
                    <DivDentroInputStyled>
                        <LabelStyled>Celular *</LabelStyled>
                        <InputStyled type={"text"} placeholder="Ex: (12) 93456-7891" />
                    </DivDentroInputStyled>
                    <DivDentroInputStyled>
                        <LabelStyled>Data de nascimento *</LabelStyled>
                        <InputStyled type={"text"} placeholder="Ex: 25/08/2005" />
                    </DivDentroInputStyled>
                </DivInputStyled>
                <DivInputStyled>
                    <DivDentroInputStyled>
                        <LabelStyled>CEP *</LabelStyled>
                        <InputStyled type={"text"} placeholder="Ex: 12345-678" />
                    </DivDentroInputStyled>
                    <DivDentroInputStyled>
                        <LabelStyled>Bairro *</LabelStyled>
                        <InputStyled type={"text"} placeholder="Ex: Campinas" />
                    </DivDentroInputStyled>
                </DivInputStyled>
                <DivInputStyled>
                    <DivDentroInputStyled>
                        <LabelStyled>Endereço *</LabelStyled>
                        <InputStyled type={"text"} placeholder="Ex: Rua 9 de julho" />
                    </DivDentroInputStyled>
                    <DivDentroInputStyled>
                        <LabelStyled>Número *</LabelStyled>
                        <InputStyled type={"text"} placeholder="Ex: 127" />
                    </DivDentroInputStyled>
                </DivInputStyled>
                <DivInputStyled>
                    <DivDentroInputStyled>
                        <LabelStyled>Complemento *</LabelStyled>
                        <InputStyled type={"text"} placeholder="Na esquina da rua" />
                    </DivDentroInputStyled>
                    <DivDentroInputStyled>
                        <LabelStyled>Residência *</LabelStyled>
                        <SelectStyled>
                            <option value="casaOuApartamento" selected disabled>Casa ou apartamento</option>
                            <option value="Casa">Casa</option>
                            <option value="Apartamento">Apartamento</option>
                        </SelectStyled>
                    </DivDentroInputStyled>
                </DivInputStyled>
                <DivInputStyled>
                    <DivDentroInputStyled>
                        <LabelStyled>Senha *</LabelStyled>
                        <InputStyled type={"password"} placeholder="Ex: Sua senha" />
                    </DivDentroInputStyled>
                    <DivDentroInputStyled>
                        <LabelStyled>Confirme sua senha *</LabelStyled>
                        <InputStyled type={"password"} placeholder="Ex: Confirme a sua senha" />
                    </DivDentroInputStyled>
                </DivInputStyled>
                <Div1Styled>
                    <BtnLogarStyled>Cadastrar</BtnLogarStyled>
                </Div1Styled>
            </form>
        </DivGeralStyled>
    )
}