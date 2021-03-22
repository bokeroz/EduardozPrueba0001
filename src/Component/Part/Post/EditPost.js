import React from 'react'
import axios from 'axios'
import {Container, Col, Row} from 'reactstrap';
import FormPost from './FormPost'
import Navs from '../nav'

var d = new Date();
var n = d.toString();
var id_user = "1";

class EditPost extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            title: '',
            comment: '',
            id_user: id_user,
            date: n,
            id_p: this.props.match.params.id,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.InputChangeHandler = this.InputChangeHandler.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:5500/post/id/' + this.state.id_p)
        .then((result) => {
            const data = result.data.data
            this.setState({
                //data:data
                title: data.title,
                comment: data.comment,
                id_user: data.id_user,
                date: n,

            })
        })
    }
    
    InputChangeHandler(event) {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // const id = this.state.id
        const data = this.state
        // delete data.id
        console.log("the data to update is "+JSON.stringify(data));
        
        axios.put('http://localhost:5500/post/edit', data)
            .then((result) => {
                console.log("the result is  "+JSON.stringify(data));
                    console.log(result)
                    this.setState({ redirect: true })
                    window.location.href = '/';
                })
        
    }
        
    render() {
        // console.log(this.state)
        return (

            <div>
                <Navs />

                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h2 >Edit {this.state.title}</h2><br />
                            <FormPost
                                title={this.state.title}
                                comment={this.state.comment}
                                id_user={this.state.id_user}
                                InputChangeHandler={this.InputChangeHandler}
                                handleSubmit={this.handleSubmit}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default EditPost