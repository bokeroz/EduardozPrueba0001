import React from 'react'
import Select from 'react-select'
import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

class LoginForm extends React.Component{
    render(){
        return(
            <Form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>email</Label>
                    <Col sm={10}>
                        <Input
                            name="email"
                            type="text"
                            placeholder="Email"
                            value={this.props.email}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="password"
                            placeholder="password"
                            value={this.props.password}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button color="primary">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>  
        )
        
    }
}

export default LoginForm