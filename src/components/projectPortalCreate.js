import React, { Component } from 'react';
import { Button, Row,Col, Form} from 'react-bootstrap';

import ProjectsNav from './projectPortalNav';
import Axios from 'axios';
import Header from './header';

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
        if(this.state.name !== ""){
            const projectPostUrl = "http://localhost:8080/project";
            var postData = {
                name: this.state.name,
                description: this.state.description
            }
            Axios.post(projectPostUrl,postData)
            .then(result => {
                console.log(result.data)
                if (result.status) {
                    alert("Project created successfully")
                    let path = '/projects';
                    this.props.history.push(path); 
                }
                else {
                    alert("cannot create porject");
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
        else{
            alert("Please enter project name to proceed")
        }
       
    }
    handleCancel(e){
        console.log("cancel in")
        let path = '/projects';
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