import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import type { ReactNode } from "react";

interface Props {
  entries: Record<string, string>; // {"Name to display": "Link",}
}

function NavbarComp({ entries }: Props): ReactNode {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">SimChecklists</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Aircrafts" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">C172</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">B737</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">GitHub</Nav.Link>
            <Nav.Link href="#link">References</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
