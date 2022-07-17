import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoBrand from "../../assets/img/logobranca.png"
import { CustomButton } from "../CustomButton";
export function Header() {
    return(
        <Navbar fixed="top" expand="lg">
        <Container fluid>
          <Navbar.Brand to="/" as={Link}>
            <img src={LogoBrand} alt="MovArt" width={170} height={80}/>
          </Navbar.Brand>
          <NavBarToggleStyled aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBarsStaggered}  className="text-white" size="lg" />
            </NavBarToggleStyled>
        <NavBarCollapseStyled id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLinkStyled forwardedAs={Link} to="/" className="justify-contend-center text-center">Início</NavLinkStyled>
            <NavLinkStyled forwardedAs={Link} to="/catálogo" className="justify-contend-center text-center">Catálogo</NavLinkStyled>
            <CustomButton className="mt-2 mt-lg-0" variant="primary">Tenho uma conta</CustomButton>
            <CustomButton className="mt-2 mb-2 mt-lg-0" variant="primary">Criar nova conta</CustomButton>
        </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <CustomButton variant="outline-primary">Pesquisar</CustomButton>
            </Form>
          </NavBarCollapseStyled>
        </Container>
      </Navbar>
    )
}
const NavBarToggleStyled = styled(Navbar.Toggle)`
    border:none;
`

const NavBarCollapseStyled = styled(Navbar.Collapse)`
   @media (max-width: 991px) {
   background-color:#fafafa ;
    margin: 0 -12px;
    padding: 1rem 2rem;
}
`
const NavLinkStyled = styled(Nav.Link)`
    @media (min-width: 992px){
        color: #fafafa!important;
    }

`