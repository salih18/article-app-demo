import React, { useState } from "react";
import {
  Navbar as NavbarBS,
  Nav,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

import "./Navbar.scss";

const NavbarComponent = () => {
  const [collapsed, setCollapsed] = useState(true);
  const handleCollapse = () => {
    setCollapsed((prevSt) => !prevSt);
  };
  return (
    <NavbarBS color="light" expand="md" light>
      <NavbarBrand href="/" className="mr-auto">
        S-Magazine
      </NavbarBrand>
      <NavbarToggler onClick={handleCollapse} className="mr-2" />

      <Collapse isOpen={collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </NavbarBS>
  );
};

export default NavbarComponent;
