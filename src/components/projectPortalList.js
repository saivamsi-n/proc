
import React, { Component } from 'react';
import { Button, Row,Col, Table} from 'react-bootstrap';

import ProjectsNav from './projectPortalNav';
import Axios from 'axios'
import Header from './header'

export default class Project extends Component {
    constructor(props) {
        super(props);
        
        this.handleCreate = this.handleCreate.bind(this);
        this.handleClick = this.handleClick.bind(this);

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
        let path = '/projects/create';
        this.props.history.push(path);  
    }

    handleClick(id){
        if(id){
            let path = '/projects/'+id;
            this.props.history.push(path);  
        }
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
                                        return  <tr onClick={() =>this.handleClick(item._id)}>
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