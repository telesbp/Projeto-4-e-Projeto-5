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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavBarCollapseStyled id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="justify-contend-center text-center">Início</Nav.Link>
            <Nav.Link href="#link">Catálogo</Nav.Link>
            <CustomButton>Login</CustomButton>
            <CustomButton>Criar conta</CustomButton>
        </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <CustomButton variant="outline-dark">Search</CustomButton>
            </Form>
          </NavBarCollapseStyled>
        </Container>
      </Navbar>
    )
}
const NavBarCollapseStyled = styled(Navbar.Collapse)`
   @media (max-width: 991px) {
   background-color:#fafafa ;
    margin: 0 -12px;
    padding: 1rem 2rem;
}
`