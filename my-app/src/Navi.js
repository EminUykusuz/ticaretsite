import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="success" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.instagram.com/eminuyksz/">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>

              </UncontrolledDropdown>
              <CartSummary cart={this.props.cart} DeletetoCart={this.props.DeletetoCart} ClearCart={this.props.ClearCart} />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}