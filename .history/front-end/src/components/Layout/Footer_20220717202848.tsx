import { Container } from "react-bootstrap";
import styled from "styled-components";
import LogoBrand from "../../assets/img/logobranca.png"

export function Footer () {
    return(
        <footer className="text-center">
            <ContainerStyle>
                <img src={LogoBrand} alt="MovArt" width={170} height={80}/>
            </ContainerStyle>
        </footer>
    )
}

const ContainerStyle = styled.footer`
    background: #A3B18A;
`