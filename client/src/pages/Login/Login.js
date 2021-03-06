import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col, 
         Form, FormGroup,Label, Input, Button, 
         Modal, ModalBody} from "reactstrap";
import API from "../../utils/API";
import Jumbotron from '../../components/Jumbotron';
import Skills from "../../components/Skills"
import "./Login.css";
import Footer from '../../components/Footer';
import WOW from "wowjs"


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        API.loginIn( {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                // update the state to redirect to surveyoption
                this.setState({
                loggedIn: true,
                redirectTo: '/surveyoptions'
              }) 
               }).catch(error => {
                  console.log('login error: ')
                  console.log(error);
                });
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <Container fluid className ="login-container">
                    <Row>
                        <Col>
                        {/* <Skills /> */}
                        <Jumbotron>
                            <div className="display-1">NWORF</div>
                        <div className="nworf">
      </div>
                                          <h4>🙃Turn that frown upside down.🙃</h4>
                                          
                                          </Jumbotron> 
                        <Form>
                            <FormGroup>
                                <Label for ="username">Username</Label>
                                <Input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}                              
                                >
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for = "password">Password</Label>
                                <Input
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                >
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Button
                                outline color ="info"
                                type="submit"
                                onClick={this.handleSubmit}
                                >
                                Login
                                </Button>
                                <Link to ="signup"> Sign Up</Link>
                                
                            </FormGroup>
                        </Form>
                        <Skills />
                        </Col>
                       
                    </Row> 
                </Container>
            );
        };
    };
};

export default LoginForm