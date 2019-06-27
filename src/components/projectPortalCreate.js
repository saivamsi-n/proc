// edit.component.js

import React, { Component } from 'react';
import {Nav,Navbar, Button, Row,Col, Form} from 'react-bootstrap';

import Header from './header'
import Axios from 'axios'
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
        // let path = '/project/1';
        // this.props.history.push(path);  
        const projectPostUrl = "http://localhost:8080/project";
        var postData = {
            name: this.state.name,
            description: this.state.description
        }
        Axios.post(projectPostUrl,postData)
        .then(result => {
            console.log(result.data)
            if (result.data) {
               this.setState({
                    projects: result.data
                })
            }
            else {
                alert(result.data.message);
            }
        })
        .catch(error => {
            console.log(error);
        });
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