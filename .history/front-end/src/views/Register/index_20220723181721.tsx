import { Container, Form } from "react-bootstrap"
import { FormField } from "../../components/FormField"
import { Layout } from "../../components/Layout"
import { PageTitle } from "../../components/PageTitle"

export function RegisterView(){
    return(
        <Layout>
            <Container>
                <PageTitle>Nova Conta</PageTitle>
                <Form>
                    <Form.Field
                    label="Nome"
                    placeHolder="Digite seu nome completo"
                    controlId="input-name" />
                    <Form.Field
                    label="Nome"
                    placeHolder="Digite seu nome completo"
                    controlId="input-name" />
                    <Form.Field
                    label="Nome"
                    placeHolder="Digite seu nome completo"
                    controlId="input-name" />
                </Form>
            </Container>            
        </Layout>
    )
}