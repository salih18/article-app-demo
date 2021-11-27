import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar as NavbarBS,
  Nav,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

import { useAuth } from "./../redux/hooks";

import "./Navbar.scss";

const NavbarComponent = () => {
  const { loadUser, user, logoutUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [collapsed, setCollapsed] = useState(false);
  const handleCollapse = () => {
    setCollapsed((prevSt) => !prevSt);
  };

  const handleLogout = async () => {
    await logoutUser();
    navigate("/");
  };

  return (
    <NavbarBS color="light" expand="md" light style={{ marginBottom: "5rem" }}>
      <NavbarBrand href="/" className="ml-auto">
        <strong>S-Magazine</strong>
      </NavbarBrand>

      {isAuthenticated && (
        <NavbarBrand href="/" className="ml-auto">
          <span className="lead">Hi, </span>{" "}
          <span className="text-muted">{user?.name}</span>{" "}
        </NavbarBrand>
      )}

      <NavbarToggler onClick={handleCollapse} className="mr-2" />

      <Collapse isOpen={collapsed} navbar>
        <Nav navbar className="ml-auto">
          {!isAuthenticated && (
            <NavItem style={{ cursor: "pointer" }}>
              <NavLink href="/login/">Login</NavLink>
            </NavItem>
          )}

          {isAuthenticated && (
            <NavItem style={{ cursor: "pointer" }}>
              <NavLink onClick={handleLogout}>Logout</NavLink>
            </NavItem>
          )}
        </Nav>
      </Collapse>
    </NavbarBS>
  );
};

export default NavbarComponent;
