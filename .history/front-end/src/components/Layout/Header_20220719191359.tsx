import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoBrand from "../../assets/img/logobranca.png";
import { CustomButton } from "../CustomButton";

type Props ={
  startTransparent?: boolean
}

export function Header( { startTransparent = false } : Props ) {
    const [isTransparent, setIsTransparent] = useState(startTransparent)
    useEffect(() => { 
        const scrollChange = () => {
            const isLowScroll = window.scrollY < 60
            if (startTransparent && isLowScroll !== isTransparent){
            setIsTransparent(isLowScroll)
        }
        } 
        window.addEventListener("scroll", scrollChange)
        return () => {
            window.removeEventListener("scroll", scrollChange)
        }
    },[isTransparent, startTransparent])
    return(
        <NavBarStyle fixed="top" expand="lg" bg={isTransparent ? undefined : "white"}>
        <Container fluid>
          <Navbar.Brand to="/" as={Link}>
            <ImageStyle src={LogoBrand} alt="MovArt" width={170} height={80}/>
          </Navbar.Brand>
          <NavBarToggleStyled aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBarsStaggered}  className="text-white" size="lg" />
            </NavBarToggleStyled>
        <NavBarCollapseStyled id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLinkStyled forwardedAs={Link} to="/" className="justify-contend-center text-center">Início</NavLinkStyled>
            <NavLinkStyled forwardedAs={Link} to="/catálogo" className="justify-contend-center text-center">Catálogo</NavLinkStyled>
            <CustomButton className="mt-2 mt-lg-0 ms-lg-4" variant="primary">Tenho uma conta</CustomButton>
            <CustomButton className="mt-2 mt-lg-0 ms-lg-4" variant="primary">Criar nova conta</CustomButton>
        </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="mt-2 mt-lg-0 ms-lg-4"
                aria-label="Search"
              />
              <CustomButton variant={isTransparent ? "outline-secundary" : "outline-primary" } className="mt-2 mt-lg-0 ms-lg-4 mx-2">Pesquisar</CustomButton>
            </Form>
          </NavBarCollapseStyled>
        </Container>
      </NavBarStyle>
    )
}
const NavBarStyle = styled(Navbar)`
    transition: all 0.3s linear;
    ${props => props.bg === "white" && `
        box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
        background: #A3B18A!important;
    `}
  
`
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
const ImageStyle = styled.img`
    @media (min-width: 992px){
       width: 226px;
       height: auto;
    }
`