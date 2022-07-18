import { Container } from "react-bootstrap";

export function Footer () {
    return(
        <footer className="text-center">
            <Container>
            <img src={LogoBrand} alt="MovArt" width={170} height={80}/>
            </Container>
        </footer>
    )
}