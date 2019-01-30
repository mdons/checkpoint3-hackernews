import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "../style/style.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.setSortType = props.setSortType;
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="Header">
        <Navbar color="warning" expand="md" fixed="top">
          <NavbarBrand>
            <h1>Hacker News</h1>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sort by
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => this.setSortType("topstories")}>
                    Top
                  </DropdownItem>
                  <DropdownItem onClick={() => this.setSortType("beststories")}>
                    Best
                  </DropdownItem>
                  <DropdownItem onClick={() => this.setSortType("newstories")}>
                    New
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
