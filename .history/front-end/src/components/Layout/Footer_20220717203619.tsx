import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoBrand from "../../assets/img/logobranca.png"

export function Footer () {
    return(
        <footer>
            <ContainerStyle>
                <img src={LogoBrand} alt="MovArt" width={170} height={80}/>
                <NavLinkTitleStyled  as={Link} to="/">Início</NavLinkTitleStyled >
                <NavLinkTitleStyled  as={Link} to="/">Catálogo</NavLinkTitleStyled >
                <NavLinkTitleStyled  as={Link} to="/">Entrar</NavLinkTitleStyled >
                <NavLinkTitleStyled  as={Link} to="/">Criar conta</NavLinkTitleStyled >
                <NavLinkTitleStyled  as={Link} to="/">Termos e Serviços</NavLinkTitleStyled >
            </ContainerStyle>
        </footer>
    )
}

const ContainerStyle = styled.footer`
    background: #A3B18A;
`
const NavLinkTitleStyled = styled(Nav.Link)`
    color:#DAD7CD;
`