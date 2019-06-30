// edit.component.js

import React, { Component } from 'react';
import { Button, Row,Col, Form} from 'react-bootstrap';

import Header from './header'
import ProjectsNav from './projectPortalNav';

import Axios from 'axios'
export default class ProjectUsersCreate extends Component {
    constructor(props) {
        super(props);
        
        this.handleCreate = this.handleCreate.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state ={
            showCreateButton: true,
            username: ""
        }
    }
    
    handleCreate(e){
       if(this.state.username !==""){
        const userPostUrl = "http://localhost:8080/user";
        var postData = {
            username: this.state.username,
        }
        Axios.post(userPostUrl,postData)
        .then(result => {
            if (result.status) {
                alert("user created successfully")
                let path = '/users';
                this.props.history.push(path); 
            }
            else {
                alert("cannot create user");
            }
        })
        .catch(error => {
            console.log(error);
        });
       }
       else{
           alert("Please enter username")
       }
       
    }
    handleCancel(e){
        console.log("cancel in")
        let path = '/users';
        this.props.history.push(path); 
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
  render() {
    return (
        <div>
            <Header portalName="PROJECT PORTAL" showIcon="true"/>
            <ProjectsNav projects="true"/>
          <div className="container-fluid"> 
                 <Row>
                     <Col lg={2}></Col>
                     <Col lg={8}>
                     <div style={{ marginTop: 60 }}>
                        <div style={{ width: "300px", margin: "0 auto"}}>
                                <h5 className="portal-color">Create User</h5>
                                <Form id="user-create-form">
                                    <Form.Group>
                                        <Form.Control 
                                            type="text" 
                                            name="username" 
                                            placeholder="name"
                                            value={this.state.username}
                                            onChange={this.handleChange}/>
                                    </Form.Group>

                                    <Button className="user-button margin-right-60 margin-left-40" variant="primary" onClick={this.handleCreate} id="user-edit-button">
                                        Create
                                    </Button>
                                    <Button className="user-button"  variant="primary" onClick={this.handleCancel}  id="user-close-button">
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