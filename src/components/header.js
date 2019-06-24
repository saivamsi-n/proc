// edit.component.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
    <Navbar bg="#283384" expand="lg"  >
        <Navbar.Brand href="#">{this.props.portalName}</Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link href="#home" style={{color:"#ffffff"}}>
                {(this.props.showIcon == "true")? <div>User Icon</div>: <p></p>}
            </Nav.Link>
        </Nav>
    </Navbar>
    )
  }
}