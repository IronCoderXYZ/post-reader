// NPM Imports
import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, NavbarBrand, Nav, NavItem, Button,
} from 'reactstrap';

const Header = ({ toggleDarkMode, darkMode }) => (
  <div>
    <Navbar color={darkMode ? 'dark' : 'primary'}>
      <NavbarBrand className="text-light">
        Post Reader
      </NavbarBrand>
      <Nav navbar style={{ flexDirection: 'row' }} className="ml-auto">
        <NavItem className="mr-3">
          <Button className="text-light" onClick={toggleDarkMode}>
            Switch Dark Mode
          </Button>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);
Header.propTypes = {
  darkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func,
};
Header.defaultProps = {
  darkMode: false,
  toggleDarkMode: () => {},
};
export default Header;
