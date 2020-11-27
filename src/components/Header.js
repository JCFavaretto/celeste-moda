import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Navbar color="primary" dark expand="md" fixed="top">
      <NavbarBrand href="/" className="mr-auto">
        Celeste Moda
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar className="ml-5">
          <NavItem>
            <NavLink href="/products">Productos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contactus">Nosotros</NavLink>
          </NavItem>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
