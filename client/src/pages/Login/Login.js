import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";


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
        })
            .catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <Container>
                    <Row>
                    <Col className="login-col" sm="12" md={{ size: 6, offset: 3 }} >
                    <h4>Login</h4>
                    <Form>
                        <FormGroup>
                            <Label for="username"> Username</Label>
                            <Input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.handleChange}     
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password"> Password</Label>
                            <Input
                                placeholder="password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}     
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button
                            type="submit"
                            color="danger"
                            onClick = {this.handleSubmit}
                            >
                            Login
                            </Button>
                        </FormGroup>
                    </Form>
                    </Col>
                    </Row>
                </Container>
            )
        }
    }
}

export default LoginForm