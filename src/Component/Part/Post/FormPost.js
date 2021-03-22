import React from 'react'
import Select from 'react-select'
import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

class FormPost extends React.Component{
    render(){
        return(
            <Form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Label for="exampletitle" sm={2}>Title</Label>
                    <Col sm={10}>
                        <Input
                            name="title"
                            type="text"
                            placeholder="Title"
                            value={this.props.title}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleComment" sm={2}>Comment</Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="comment"
                            placeholder="comment"
                            value={this.props.commet}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup> 

                <Input
                    type="hidden"
                    name="id_user"
                    value={1}
                />
                <Input
                    type="hidden"
                    name="date"
                    value={1}
                />

                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button color="primary">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>  
        )
        
    }
}

export default FormPost