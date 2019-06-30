import React, { Component } from 'react';
import { Button, Row,Col, Form} from 'react-bootstrap';

import ProjectsNav from './projectPortalNav';
import Axios from 'axios'
import Header from './header'

export default class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        
        this.handleSave= this.handleSave.bind(this);
        this.handleEdit= this.handleEdit.bind(this);
        this.handleClose= this.handleClose.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.id = this.props.match.params.id;

        this.state ={
            name:"",
            description:"",
            edit: false,
        }

        const projectDetailUrl = "http://localhost:8080/project/"+ this.id
        Axios.get(projectDetailUrl)
        .then(result => {
            console.log(result,"project data id")
            if (result.data) {
                console.log(result.data)
               this.setState({
                    name: result.data.name,
                    description: result.data.description
                })
            }
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    handleSave(e){
        const projectEditUrl = "http://localhost:8080/project/"
        const projectEditData = {
            "name": this.state.name,
            "description": this.state.description,
            "id": this.id
        }
        Axios.put(projectEditUrl,projectEditData)
        .then(result => {
            console.log(result.data,"project data id")
            if (result.data.success) {
                console.log(result.data)
                this.setState({
                    name: result.data.project.name,
                    description: result.data.project.description,
                    edit: false
                })
                alert("Project updated successfully")
               

            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    handleCancel(e){
        this.setState({
            edit: false
        })
    }

    handleEdit(e){
        this.setState({
            edit: true
        })
    }

    handleClose(e){
       let path = '/projects'
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
                                    {(this.state.edit)? 
                                            <Form id="project-create-form">
                                                <Form.Group>
                                                    <Form.Control 
                                                        type="text" 
                                                        name="name" 
                                                        placeholder="name"
                                                        value={this.state.name}
                                                        onChange={this.handleChange}
                                                        />
                                                </Form.Group>
            
                                                <Form.Group>
                                                    <Form.Control 
                                                        type="text" 
                                                        placeholder="description" 
                                                        name="description" 
                                                        value={this.state.description}
                                                        onChange={this.handleChange}/>   
                                                </Form.Group>
                                                <Button className="project-button margin-right-60 margin-left-40" variant="primary" onClick={this.handleSave} id="project-save-button">
                                                    Save
                                                </Button>
                                                <Button className="project-button" variant="primary" onClick={this.handleCancel}  id="project-cancel-button">
                                                                                        Cancel
                                                </Button>
                                            </Form>
                                            :
                                            <div className="portal-color">
                                                  <h5 className="padding-bottom-40">{this.state.name}</h5>
                                            <h4 className="padding-bottom-40"> {this.state.description}</h4>
                                            <Button className="project-button margin-right-60" variant="primary" onClick={this.handleEdit} id="project-edit-button">
                                                    Edit
                                                </Button>
                                                <Button className="project-button" variant="primary" onClick={this.handleClose}  id="project-close-button">
                                                                                        Close
                                                </Button>
                                            </div>
                                          
                                        }
                                  
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