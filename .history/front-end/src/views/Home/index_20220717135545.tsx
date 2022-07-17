import { Container } from "react-bootstrap";
import styled from "styled-components";

export function HomeView(){
    return(
        <Banner className="vh-100">
            <Container>
                <h1 className="text-center text-white text-lg-start">Um lugar para chamar de Lar!</h1>
            </Container>
        </Banner>
    )
}

const Banner = styled.div`
    background-color: #d5bdaf;
`