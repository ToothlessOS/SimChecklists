import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import type { ReactNode } from "react";

interface Props {
  entries: Record<string, string>; // {"Name to display": "Link",}
}

function NavbarComp({ entries }: Props): ReactNode {
  const dropdownItems = Object.entries(entries).map(([name, link]) => (
    <NavDropdown.Item href={link} key={link}>
      {name}
    </NavDropdown.Item>
  ));

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">SimChecklists</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Aircrafts" id="basic-nav-dropdown">
              {dropdownItems}
            </NavDropdown>
            <Nav.Link href="/ref">References</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="https://github.com/ToothlessOS/SimChecklists">
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
