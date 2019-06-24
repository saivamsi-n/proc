import React, { Component } from 'react';
import { Nav,Navbar,Form, Button, Row, Col} from 'react-bootstrap';
import Header from './header'
import "react-web-tabs/dist/react-web-tabs.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

export default class Users   extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

        this.state ={
            users:[]
        }
    }

    handleSelect(eventKey){
        console.log(eventKey)
    }
    handleLogin(e){
        console.log("Login successfull")
        let path = '/project';
        this.props.history.push(path); 
    }
    
    render() {
        return (
            <div>
                 <Header portalName="OPERATOR PORTAL" showIcon="true"></Header>
                 <Navbar bg="white" expand="lg" className="projectNav">
                <Navbar.Brand href="#home">Project Portal Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Team Management</Nav.Link>
                        <Nav.Link href="#link">Downgrades</Nav.Link>
                        <Nav.Link href="#link">Feature Management</Nav.Link>
                        <Nav.Link href="#link">Traffic Management</Nav.Link>

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
            <br/>
            <div className="container">
                <Row>
                    <Col xs={3}>
                        <ul class="nav nav-tabs tabs-left flex-column sideways">
                            <li><a href="#home-v" data-toggle="tab">Home</a></li>
                            <li><a href="#profile-v" data-toggle="tab">Profile</a></li>
                            <li><a href="#messages-v" data-toggle="tab">Messages</a></li>
                            <li><a href="#settings-v" data-toggle="tab">Settings</a></li>
                        </ul>
                    </Col>
                    <Col xs={9}>
                        <div class="tab-content">
                            <div class="tab-pane" id="home-v">Home Tab.</div>
                            <div class="tab-pane" id="profile-v">Profile Tab.</div>
                            <div class="tab-pane" id="messages-v">Messages Tab.</div>
                            <div class="tab-pane" id="settings-v">Settings Tab.</div>
                        </div>
                    </Col>
                </Row>
               
            </div>
            <div className="container-fluid">
               
               <Row>
                   <Col lg={2}>
        
                        {/* <div class="text-center">
                            <Button className="top-border bottom-border" id="users">Users</Button>
                            <Button onClick={this.handleSelect} className="bottom-border" id="groups">Groups</Button>
                        </div> */}

                   </Col>
                   <Col lg={8}>
                   {/* <div id="user-search-box">
                       <div>
                       <Form id="project-create-form">
                                            <Form.Group>
                                                <Form.Control 
                                                    type="text" 
                                                    name="name" 
                                                    placeholder="name"
                                                    value={this.state.users}
                                                    onChange={this.handleChange}
                                                    />
                                            </Form.Group>
        
                                          
                                            <Button className="project-button margin-right-60 margin-left-40" variant="primary" onClick={this.handleSave} id="project-save-button">
                                                Search
                                            </Button>
                                    
                                        </Form>
                    
                       </div>
                                      
                    </div> */}
                    </Col>
                   <Col lg={2}></Col>
                </Row>
            </div>
           </div>
        )
    }
}




