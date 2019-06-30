import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
export default class Home extends Component {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(e){
        console.log("Login successfull")
        let path = '/projects';
        this.props.history.push(path); 
    }
    
    render() {
        return (
            <div>
            <div className="top-color"></div>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <div className='section-left'>
                            <div>
                            <img src={require('./image.png')} alt='logo' className="logo-image" style={{ width:"200px", height:"100px"}} />
                            <h5>PROJECT DELIVERY <br></br>SYSTEMS</h5>
                            </div>
                        </div>
                    </Col>
                    <Col style={{backgroundColor:"#283384"}}>
                    <div className='section-right'>
                            <div>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password"/>
                                    </Form.Group>
                                    <Button className="margin-left-30" variant="primary" onClick={this.handleLogin} type="submit" id="login-button">
                                        Login
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
           </Container>
           </div>
        )
    }
}



