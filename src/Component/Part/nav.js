import React, { Component } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import ls from 'local-storage'

class nav extends Component {    
    
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }                
        this.toggle = this.toggle.bind(this);            

    }
    
    toggle() {        
        this.setState({
            isOpen: !this.state.isOpen
        });
        
    }

    render(){                              
        return(
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/">Project</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Inicio</NavLink>
                        </NavItem>
                    
                        <NavItem>
                            <NavLink href="/add">Add User</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink href="/listusers">List User</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/addpost">Add Post</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink href="/login">{ ls.get('role') == "0" ? "logout" : "login"}</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>s
            </Navbar>
        )
    }
}

export default nav