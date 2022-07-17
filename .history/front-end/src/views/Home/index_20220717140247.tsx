import { Button, Container } from "react-bootstrap";
import styled from "styled-components";

export function HomeView(){
    return(
        <Banner className="vh-100">
            <Container className="h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                <h1 className="text-center text-white text-lg-start mt-auto mt-lg-0 ">Um lugar para chamar de Lar!</h1>
                <Button size="lg" className="mt-auto mt-lg-3 mb-2">Fazer Login</Button>
                <Button size="lg" className="mb-4">Criar Conta</Button>
            </Container>
        </Banner>
    )
}

const Banner = styled.div`
    background-color: #d5bdaf;
`