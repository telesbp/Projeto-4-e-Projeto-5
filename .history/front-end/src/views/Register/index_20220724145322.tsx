import { Container, Form, FormCheck } from "react-bootstrap"
import { CustomButton } from "../../components/CustomButton"
import { FormField } from "../../components/FormField"
import { Layout } from "../../components/Layout"
import { PageTitle } from "../../components/PageTitle"

export function RegisterView(){
    return(
        <Layout>
            <Container>
                <PageTitle>Nova Conta</PageTitle>
                <Form>
                    <FormField
                    label="Nome"
                    placeholder="Digite seu nome completo"
                    controlId="input-name" />
                    <FormField
                    label="E-mail"
                    placeholder="Digite seu e-mail"
                    controlId="input-email"
                    type="email" />
                    <FormField
                    label="Telefone"
                    placeholder="(00) 00000-0000"
                    controlId="input-phone" 
                    mask={
                        [
                            {mask: "(00) 0000-0000"},
                            {mask: "(00) 00000-0000"},
                        ]
                    } />
                    <FormField
                    label="Senha"
                    placeholder="Digite uma senha"
                    controlId="input-password"
                    type="password" />
                    <Form.Group className="mb-3"
                        controlId="input-terms" >
                           <FormCheck
                           type="checkbox"
                           label={<>Eu li e aceito os <a href="/" target="blank">Termos de uso</a>!</>} /> 
                        </Form.Group>
                        <div className="d-grid" ><CustomButton variant="primary">Criar conta</CustomButton></div>
                </Form>
            </Container>            
        </Layout>
    )
}