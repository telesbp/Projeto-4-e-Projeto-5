import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoBrand from "../../assets/img/logobranca.png"

export function Footer () {
    return(
        <FooterStyled>
            <Container className="d-flex flex-lg-row p-4 justify-content-center align-items-center">
                <Link to="/" className="me-lg-auto" >
                    <img src={LogoBrand} alt="MovArt" width={170} height={80}/>
                </Link>
                <Nav className="flex-column flex-lg-row mx-5">
                    <NavLinkTitleStyled  as={Link} to="/">Início</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Catálogo</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Sobre nós</NavLinkTitleStyled >
                    <NavLinkTitleStyled  as={Link} to="/">Termos e Serviços</NavLinkTitleStyled >
                </Nav>
                <Nav>
                    <Nav.Link href="http://facebook.com" target="_blank">
                        <FontAwesomeIconStyle icon={faFacebookSquare} />
                    </Nav.Link>
                    <Nav.Link href="http://instagram.com" target="_blank">
                        <FontAwesomeIconStyle icon={faInstagramSquare} />
                    </Nav.Link>
                </Nav>
            </Container>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    background: #A3B18A;
    padding: 30px 0 40px;
    @media (min-width: 992px){
        padding: 15px 0;
    }
`
const NavLinkTitleStyled = styled(Nav.Link)`
    color:#344E41;
    &:hover{
        color:#DAD7CD; 
    }
`
const FontAwesomeIconStyle = styled(FontAwesomeIcon)`
    color: #344E41;
    width: 30px;
    height: auto;
`