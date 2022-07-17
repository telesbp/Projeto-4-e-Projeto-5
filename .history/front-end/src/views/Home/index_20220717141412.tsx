import { Button, Container } from "react-bootstrap";
import styled from "styled-components";
import bgSite from "../../assets/img/mesa.png"

export function HomeView(){
    return(
        <Banner className="vh-100">
            <Container className="h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                <Title className="text-center text-white text-lg-start mt-auto mt-lg-0 ">Um lugar para chamar de Lar!</Title>
                <Button size="lg" className="mt-auto mt-lg-3 mb-2">Fazer Login</Button>
                <Button size="lg" className="mb-4">Criar Conta</Button>
            </Container>
        </Banner>
    )
}

const Banner = styled.div`
    background: url(${bgSite}) no-repeat center center;
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