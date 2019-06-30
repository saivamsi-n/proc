// edit.component.js

import React, { Component } from 'react';
import { Button, Row,Col} from 'react-bootstrap';

import ProjectsNav from './projectPortalNav';
import Axios from 'axios'
import Header from './header'


export default class ProjectUseDetail extends Component {
    constructor(props) {
        super(props);
        
        this.handleClose= this.handleClose.bind(this);
        this.username = this.props.match.params.username;

        this.state ={
            username:this.username
        }

        // const userDetailUrl = "http://localhost:8080/user/"+ this.username
        // Axios.get(userDetailUrl)
        // .then(result => {
        //     console.log(result,"user data id")
        //     if (result.data) {
        //         console.log(result.data)
        //        this.setState({
        //             username: result.data[0].username,
        //         })
        //     }
        // })
        // .catch(error => {
        //     console.log(error);
        // });
    }
    
    handleClose(e){
       let path = '/users'
       this.props.history.push(path);  
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
                        <h5 className="padding-bottom-40 portal-color" style={{marginLeft:"10px"}}>{this.state.username}</h5>
                        <Button className="project-button" style={{marginLeft:"0px"}} variant="primary" onClick={this.handleClose} >
                                                                                    Close
                                            </Button>                     
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