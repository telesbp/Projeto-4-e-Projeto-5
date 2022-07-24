import { Formik, useFormik } from "formik"
import { Col, Container, Form, FormCheck, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CustomButton } from "../../components/CustomButton"
import { FormField } from "../../components/FormField"
import { Layout } from "../../components/Layout"
import { PageTitle } from "../../components/PageTitle"

export function RegisterView(){
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            passwor: "",
            agree: false
        },
        onSubmit: () =>{

        }
    })
    const getFieldProps = (fieldName) =>{
        return(
            ... formik.getFieldProps(fieldName),
            controlId: `input-${fieldName}`
        )
    }
    return(
        <Layout>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={4}>
                        <PageTitle>Nova Conta</PageTitle>
                            <Form onSubmit={formik.handleSubmit}>
                            <FormField
                            label="Nome"
                            placeholder="Digite seu nome completo"
                            {... formik.getFieldProps("name")}
                            />
                            <FormField
                            label="E-mail"
                            placeholder="Digite seu e-mail"
                            type="email" 
                            {... formik.getFieldProps("email")}
                            />
                            <FormField
                            label="Telefone"
                            placeholder="(00) 00000-0000"
                            {... formik.getFieldProps("phone")} 
                            mask={
                                [
                                    {mask: "(00) 0000-0000"},
                                    {mask: "(00) 00000-0000"},
                                ]
                            }
                            onAccept={value => Formik.setFieldValue("phone", value)} />
                            <FormField
                            label="Senha"
                            placeholder="Digite uma senha"
                            {... formik.getFieldProps("password")}
                            type="password" />
                            <Form.Group className="mb-3"
                                controlId="input-agree" >
                                <FormCheck
                                {... formik.getFieldProps("agree")}
                                type="checkbox"
                                label={<>Eu li e aceito os <a href="/" target="blank">Termos de uso</a>!</>} /> 
                                </Form.Group>
                                <div className="d-grid mb-4">
                                    <CustomButton variant="primary" type="submit">Criar conta</CustomButton>
                                </div>
                                <p className="text-center">Já possui uma conta? <Link to="/login">Faça Login.</Link></p>
                        </Form>
                    </Col>
                </Row>                               
            </Container>            
        </Layout>
    )
}