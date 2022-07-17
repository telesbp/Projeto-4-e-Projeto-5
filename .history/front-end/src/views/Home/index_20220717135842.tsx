import { Button, Container } from "react-bootstrap";
import styled from "styled-components";

export function HomeView(){
    return(
        <Banner className="vh-100">
            <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-center text-white text-lg-start">Um lugar para chamar de Lar!</h1>
                <Button size="lg">Fazer Login</Button>
                <Button size="lg">Criar Conta</Button>
            </Container>
        </Banner>
    )
}

const Banner = styled.div`
    background-color: #d5bdaf;
`