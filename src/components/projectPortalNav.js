import React, { Component } from 'react';
import {Nav,Navbar} from 'react-bootstrap';

export default class ProjectsNav extends Component {
   
  render() {
    return (
        <Navbar bg="white" expand="lg" className="projectNav">
        <Navbar.Brand> 
            <img src={require('./image.png')} alt="Employers Holding" className="logo-image" style={{ width:"200px", height:"100px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/projects" className={this.props.projects==="true"?"active-tab-component":""}>Projects</Nav.Link>
                <Nav.Link href="/users" className={this.props.users==="true"?"active-tab-component":""}>Users</Nav.Link>
                <Nav.Link href="">Reports</Nav.Link>
             </Nav>
        </Navbar.Collapse> 
    </Navbar> 
    )
  }
}