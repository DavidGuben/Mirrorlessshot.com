import React, {Component} from 'react'
import { 
    Navbar, NavbarBrand, NavbarNav,
    NavbarToggler, Collapse, NavItem,
    NavLink, Dropdown, DropdownToggle, 
    DropdownMenu, DropdownItem, Container
} from 'mdbreact'
import logo from './../Images/logo.svg'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
                <Navbar style={{ backgroundColor: '#001427' }} dark className="navbar navbar-expand-lg" scrolling>
                <Container>
                <img src={logo} alt="logo" style={{ width: '50px', height: '50px' }} className="animated fadeIn" />
                    <NavbarBrand>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="/">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>Location</DropdownToggle>
                              <DropdownMenu>
                                  <DropdownItem href="#">Italy</DropdownItem>
                                  <DropdownItem href="#">Pennsylvania</DropdownItem>
                                  <DropdownItem href="#">New York</DropdownItem>
                                  <DropdownItem href="#">New Jersey</DropdownItem>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Container>
                </Navbar>
        );
    }
}

export default Nav
