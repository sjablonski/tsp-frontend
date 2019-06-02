import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const NavBar = styled(Navbar)`
  border: 1px solid white;
  border-radius: 48px;

  &.navbar {
    padding: 16px 32px;
  }

  &.navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 1);
    font-weight: ${({ theme }) => theme.light};
  }
`;

const StyledLink = styled(Link)`
  font-weight: ${({ theme }) => theme.light};
  &:active {
    background: ${({ theme }) => theme.lightGrey};
  }
`;

class NavigationBar extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <NavBar color="none" dark expand="lg">
          <Link to="/" className="navbar-brand">
            <FontAwesomeIcon icon="home" />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Rachunki i płatności
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <StyledLink className="unstyle-link" to="/moje-rachunki">
                      Moje płatności
                    </StyledLink>
                  </DropdownItem>
                  <DropdownItem>
                    <StyledLink className="unstyle-link" to="/historia-platnosci">
                      Historia płatności
                    </StyledLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link className="nav-link" to="/uslugi">
                  Usługi
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/wiadomosci">
                  Wiadomości
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/pomoc-techniczna">
                  Pomoc techniczna
                </Link>
              </NavItem>
            </Nav>
            <Nav navbar className="ml-auto">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img
                    src="https://api.adorable.io/avatars/55/typeofweb1.png"
                    width="32px"
                    height="32px"
                    alt="avatar"
                    className="rounded image"
                  />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header>Jan Kowalski</DropdownItem>
                  <DropdownItem>
                    <StyledLink className="unstyle-link" to="/profil">
                      Mój profil
                    </StyledLink>
                  </DropdownItem>
                  <DropdownItem>
                    <StyledLink className="unstyle-link" to="/">
                      Wyloguj
                    </StyledLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </NavBar>
      </>
    );
  }
}

export default NavigationBar;
