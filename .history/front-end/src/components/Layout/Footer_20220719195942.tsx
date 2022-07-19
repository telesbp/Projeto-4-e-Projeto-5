import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoBrand from "../../assets/img/logobranca.png"

type Props ={
    withoutMargin?: boolean
}

export function Footer ({withoutMargin = false}: Props) {
    return(
        <FooterStyled className={`${withoutMargin ? "" : "mt-5"}`} >
            <Container className="d-flex p-4 justify-content-center align-items-center">
                <Link to="/" className="me-lg-auto" >
                    <img src={LogoBrand} alt="MovArt" width={170} height={80}/>
                </Link>
                <Nav className="flex-column flex-lg-row mx-5">
                    <NavLinkTitleStyled className="mx-lg-2" as={Link} to="/">Início</NavLinkTitleStyled >
                    <NavLinkTitleStyled className="mx-lg-2"  as={Link} to="/">Catálogo</NavLinkTitleStyled >
                    <NavLinkTitleStyled className="mx-lg-2"  as={Link} to="/">Sobre nós</NavLinkTitleStyled >
                    <NavLinkTitleStyled className="mx-lg-2"  as={Link} to="/">Termos e Serviços</NavLinkTitleStyled >
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
    color:#f3f1ec;
    &:hover{
        color:#344E41; 
    }
`
const FontAwesomeIconStyle = styled(FontAwesomeIcon)`
    color: #DAD7CD;
    width: 30px;
    height: auto;
    &:hover{
        color:#344E41; 
    }
`