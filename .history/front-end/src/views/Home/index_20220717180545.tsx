import { Container } from "react-bootstrap";
import styled from "styled-components";
import bgSite from "../../assets/img/cadeira1.png"
import { CustomButton } from "../../components/CustomButton";
import { Layout } from "../../components/Layout";

export function HomeView(){
    return(
        <Layout>
            <Banner className="vh-100">
                <Container className="h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                    <Title className="text-center text-white text-lg-start mt-auto mt-lg-0 ">Um lugar para chamar de LAR!</Title>
                    <CustomButton size="lg" to="login" variant="primary" className="mt-auto mt-lg-3 mb-2">Tenho uma conta</CustomButton>
                    <CustomButton size="lg" to="cadastro" variant="outline-primary" className="mb-4">Criar nova conta</CustomButton>
                </Container>
            </Banner>
        </Layout>
    )
}

const Banner = styled.div`
    background: url(${bgSite}) no-repeat center center;
    background-size: cover;
`
const Title = styled.h1`
    font-size: 2.25rem;
    font-weight: bold;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    @media (min-width: 992px){
        font-size: 3rem;
        max-width: 500px;
    }
`