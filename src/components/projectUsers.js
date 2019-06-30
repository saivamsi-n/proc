
import React, { Component } from 'react';
import {Button, Row,Col, Table} from 'react-bootstrap';
import Axios from 'axios'

import Header from './header'
import ProjectsNav from './projectPortalNav';


export default class ProjectUsers extends Component {
    constructor(props) {
        super(props);
        
        this.handleCreate = this.handleCreate.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state ={
            users: [],
            showCreateButton: true,
            tableclassName: ""
        }
        const usersGetUrl = "http://localhost:8080/user"
        Axios.get(usersGetUrl)
        .then(result => {
            console.log(result.data)
            if (result.data) {
               this.setState({
                    users: result.data
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
        let path = '/users/create';
        this.props.history.push(path);  
    }
    handleClick(id){
        if(id){
            let path = '/users/'+id;
            this.props.history.push(path);  
        }
    }

  render() {
    return (
        <div>
            <Header portalName="PROJECT PORTAL" showIcon="true"/>
            <ProjectsNav users="true"/>
            <div className="container-fluid">
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                    <Button  id="create-button" variant="primary" onClick={this.handleCreate} type="submit">
                                                        Create
                            </Button>
                            {(this.state.users.length>0) ? 
                            <Table striped bordered hover className="users-table">
                                <thead>
                                    <tr>
                                        <th className="table-header">Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.users.map((item) => {
                                       
                                       return item.username && <tr onClick={() =>this.handleClick(item.username)}>
                                            <td>{item.username}</td>
                                        </tr>
                                })}    
                                </tbody>
                            </Table> :
                            <div id="no-projects"><p>No Users Available</p></div>
                            }
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            
            </div>
        </div>
    )
  }
}