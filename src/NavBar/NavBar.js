import React, { useState } from 'react';
import './NavBar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="custom-navbar" expand="md">
        <Nav >
          < NavItem className="custom-navitem">
            <i className="fas fa-tachometer-alt" style={{ color: 'white', position: 'relative', top: '30%', left: '8%' }}></i>
            <NavLink className="custom-navlink" href="/Dashboard/">Dashboard</NavLink>
          </NavItem>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="custom-navlink">
                <i className="fas fa-tint" style={{position:'relative', right:'7%'}} ></i>
                Campaigns
              </DropdownToggle>
              <DropdownMenu left="true">
                <DropdownItem>
                  Videos in Production
                </DropdownItem>
                <DropdownItem>
                  Campaigns in Market
                </DropdownItem>
                <DropdownItem>
                  Completed Campaigns
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="custom-navitem">
              <i className="fas fa-ad" style={{ color: 'white', position:'relative', top:'32%' }}></i>
              <NavLink className="custom-navlink" href="/Advertisers/">Advertisers</NavLink>
            </NavItem>
          </Nav>
          <Nav>
            < NavItem className="custom-navitem">
              <NavLink className="custom-navlink" href="/Order/">+Order</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;