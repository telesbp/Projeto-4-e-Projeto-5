import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoBrand from "../../assets/img/logobranca.png"

export function Footer () {
    return(
        <FooterStyled>
            <Container>
                <img src={LogoBrand} alt="MovArt" width={170} height={80}/>
                <Nav>
                    <NavLinkTitleStyled  as={Link} to="/">Início</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Catálogo</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Entrar</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Criar conta</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Termos e Serviços</NavLinkTitleStyled >
                </Nav>
            </Container>
            <Container>
                <img src={LogoBrand} alt="MovArt" width={170} height={80}/>
                <Nav>
                    <NavLinkTitleStyled  as={Link} to="/">Início</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Catálogo</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Entrar</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Criar conta</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Termos e Serviços</NavLinkTitleStyled >
                </Nav>
            </Container>
            <Container>
                <img src={LogoBrand} alt="MovArt" width={170} height={80}/>
                <Nav>
                    <NavLinkTitleStyled  as={Link} to="/">Início</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Catálogo</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Entrar</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Criar conta</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Termos e Serviços</NavLinkTitleStyled >
                </Nav>
            </Container>
            <Container>
                <img src={LogoBrand} alt="MovArt" width={170} height={80}/>
                <Nav>
                    <NavLinkTitleStyled  as={Link} to="/">Início</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Catálogo</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Entrar</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Criar conta</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Termos e Serviços</NavLinkTitleStyled >
                </Nav>
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