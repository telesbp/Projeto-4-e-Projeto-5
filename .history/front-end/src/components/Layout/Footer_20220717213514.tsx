import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoBrand from "../../assets/img/logobranca.png"

export function Footer () {
    return(
        <FooterStyled>
            <Container>
                <img src={LogoBrand} alt="MovArt" width={170} height={80}/>
                <NavStyled>
                    <NavLinkTitleStyled  as={Link} to="/">Início</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Catálogo</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Sobre nós</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Termos e Serviços</NavLinkTitleStyled >
                </NavStyled>
            </Container>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    background: #A3B18A;
`
const NavLinkTitleStyled = styled(Nav.Link)`
    color:#DAD7CD;
`
const NavStyled = styled(Nav)`
    display: flex;
`