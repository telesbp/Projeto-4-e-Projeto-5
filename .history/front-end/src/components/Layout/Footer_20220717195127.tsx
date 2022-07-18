import { Container } from "react-bootstrap";
import LogoBrand from "../../assets/img/logobranca.png"

export function Footer () {
    return(
        <footer className="text-center">
            <Container>
                <img src={LogoBrand} alt="MovArt" width={170} height={80}/>
            </Container>
        </footer>
    )
}