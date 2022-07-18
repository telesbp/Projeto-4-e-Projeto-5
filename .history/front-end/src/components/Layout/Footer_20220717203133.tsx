import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoBrand from "../../assets/img/logobranca.png"

export function Footer () {
    return(
        <footer>
            <ContainerStyle>
                <img src={LogoBrand} alt="MovArt" width={170} height={80}/>
                <NavLink as={Link} to="/">Início</NavLink>
            </ContainerStyle>
        </footer>
    )
}

const ContainerStyle = styled.footer`
    background: #A3B18A;
`