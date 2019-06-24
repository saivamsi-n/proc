// edit.component.js

import React, { Component } from 'react';
import {Nav,Navbar,NavDropdown, Button, Row,Col, Form} from 'react-bootstrap';

import Header from './header'
export default class ProjectCreate extends Component {
    constructor(props) {
        super(props);
        
        this.handleCreate = this.handleCreate.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state ={
            name:"",
            description:"",
            showCreateButton: true,
            tableclassName: ""
        }
    }
    
    handleCreate(e){
        let path = '/project/1';
        this.props.history.push(path);  
    }
    handleCancel(e){
        console.log("cancel in")
        this.setState({
            name:"",
            description:""
        })
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
  render() {
    return (
        <div>
            <Header portalName="PROJECT PORTAL" showIcon="true"/>
            <Navbar bg="white" expand="lg" className="projectNav">
                <Navbar.Brand href="#home">Project Portal Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Projects</Nav.Link>
                        <Nav.Link href="#link">Users</Nav.Link>
                        <Nav.Link href="#link">Reports</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                     </Nav>
                </Navbar.Collapse> 
            </Navbar> 
          <div className="container-fluid">
               
                 <Row>
                     <Col lg={2}></Col>
                     <Col lg={8}>
                     <div style={{ marginTop: 60 }}>
                        <div style={{ width: "300px", margin: "0 auto"}}>
                                <h5 className="portal-color">Create Project</h5>
                                <Form id="project-create-form">
                                    <Form.Group>
                                        <Form.Control 
                                            type="text" 
                                            name="name" 
                                            placeholder="name"
                                            value={this.state.name}
                                            onChange={this.handleChange}/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="description" 
                                            name="description" 
                                            value={this.state.description}
                                            onChange={this.handleChange}/>   
                                    </Form.Group>
                                    <Button className="project-button margin-right-60 margin-left-40" variant="primary" onClick={this.handleCreate} id="project-edit-button">
                                        Create
                                    </Button>
                                    <Button className="project-button"  variant="primary" onClick={this.handleCancel}  id="project-close-button">
                                                                            Cancel
                                    </Button>
                                </Form>
                        </div>
                    </div>
              
                    </Col>
                     <Col lg={2}></Col>
                 </Row>
            </div>
        </div>
    )
  }
}