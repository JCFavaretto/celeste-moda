import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Navbar color="primary" dark expand="md" fixed="top">
      <Container>
        <NavbarBrand href="/" className="mr-auto">
          Celeste Moda
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ml-5">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle nav caret>
                Productos
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link to="/products">Todos los productos</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products/hottest">Lo mas vendido</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products/promociones">Promociones</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products">Camperas</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products">Remeras</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products">Pantalones</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products">Accesorios</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink href="/contactus">Nosotros</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
