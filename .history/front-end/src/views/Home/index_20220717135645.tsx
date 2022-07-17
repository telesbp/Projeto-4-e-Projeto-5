import { Container } from "react-bootstrap";
import styled from "styled-components";

export function HomeView(){
    return(
        <Banner className="vh-100">
            <Container className="h-100 d-flex flex-colimn justify-content-center align-items-center">
                <h1 className="text-center text-white text-lg-start">Um lugar para chamar de Lar!</h1>
            </Container>
        </Banner>
    )
}

const Banner = styled.div`
    background-color: #d5bdaf;
`