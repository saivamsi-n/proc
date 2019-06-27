// edit.component.js

import React, { Component } from 'react';
import {Nav,Navbar,NavDropdown, Button, Row,Col, Table} from 'react-bootstrap';

import Header from './header'
import Axios from 'axios'
export default class Project extends Component {
    constructor(props) {
        super(props);
        
        this.handleCreate = this.handleCreate.bind(this);

        this.state ={
            projects: [],
            showCreateButton: true,
            tableclassName: ""
        }
        const projectGetUrl = "http://localhost:8080/project"
        Axios.get(projectGetUrl)
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
    
    handleCreate(e){
        let path = '/project/create';
        this.props.history.push(path);  
    }

  render() {
    return (
        <div>
            <Header portalName="PROJECT PORTAL" showIcon="true"/>
            <Navbar bg="white" expand="lg" className="projectNav">
                <Navbar.Brand href="#home">                            <img src={require('./image.png')} className="logo-image" style={{ width:"200px", height:"100px"}} />
</Navbar.Brand>
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
                    <Button  id="create-button" variant="primary" onClick={this.handleCreate} type="submit">
                                                        Create
                            </Button>
                            {(this.state.projects.length>0) ? 
                            <Table striped bordered hover className="projects-table">
                                <thead>
                                    <tr>
                                        <th className="table-header">Name</th>
                                        <th className="table-header">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.projects.map((item) => {
                                   
                                        return  <tr>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                        </tr>
                                })}
                                    
                                </tbody>
                            </Table> :
                            <div id="no-projects"><p>No Projects Available</p></div>
                            }
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            
            </div>
        </div>
    )
  }
}