import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import styled from "styled-components";

export function HomeView(){
    return(
    <Container>     
        <Title>Stagio</Title>
        <Button onClick={() => toast.success("oi")}>teste</Button>
        <FontAwesomeIcon icon={fa-solid fa-circle-half-stroke} />
    </Container>
    )
}

const Title = styled.p`
    font-size: 3rem;
`