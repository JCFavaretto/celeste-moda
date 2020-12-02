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
import Cart from "components/Cart.js";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <Navbar color="primary" dark expand="md" fixed="top">
      <Container>
        <NavbarBrand href="/" className="mr-auto">
          Celeste Moda
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />{" "}
        <i className="material-icons cart-icon" onClick={toggleModal}>
          shopping_cart
        </i>
        <Cart modal={modal} toggleModal={toggleModal} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ml-5">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle nav caret>
                Productos
              </DropdownToggle>
              <DropdownMenu style={{ backgroundColor: "var(--primary)" }}>
                <DropdownItem>
                  <Link to="/products" onClick={toggleNavbar}>
                    Todos los productos
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products/hottest" onClick={toggleNavbar}>
                    Lo mas vendido
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products/promociones" onClick={toggleNavbar}>
                    Promociones
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products" onClick={toggleNavbar}>
                    Camperas
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products" onClick={toggleNavbar}>
                    Remeras
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products" onClick={toggleNavbar}>
                    Pantalones
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products" onClick={toggleNavbar}>
                    Accesorios
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink href="/contactus" onClick={toggleNavbar}>
                Nosotros
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
