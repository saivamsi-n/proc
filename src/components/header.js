// edit.component.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar} from 'react-bootstrap';

export default class Header extends Component {
    
  render() {
    return (
    <Navbar bg="#283384" expand="lg"  >
        <Navbar.Brand href="#">{this.props.portalName}</Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link href="#home" style={{color:"#ffffff"}}>
                {(this.props.showIcon === "true")?
                <div>
                    <img src={require('./profile.svg')} 
                    className="logo-image" 
                    style={{ width:"40px", height:"45px"}} 
                    alt='profile'
                    />     
                </div>: <p></p>}
            </Nav.Link>
        </Nav>
    </Navbar>
    )
  }
}