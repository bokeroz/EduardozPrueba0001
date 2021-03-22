import React from 'react'
import axios from 'axios'
import {
    Container,
    Col,
    Row,
} from 'reactstrap';
import Forms from './Part/Form'
import Navs from './Part/nav'

class Edituser extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            email:'',
            password:'',
            role:'',
            id: this.props.match.params.id,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.InputChangeHandler = this.InputChangeHandler.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:5500/user/id/' + this.state.id)
        .then((result) => {
            const data = result.data.data
            this.setState({
                //data:data
                email: data.email,
                password: data.password,
                role: data.role,
            })
        })
    }
    
    InputChangeHandler(event) {
        const value = event.target.value
        const email = event.target.email
        this.setState({
            [email]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // const id = this.state.id
        const data = this.state
        // delete data.id
        console.log(data)
        axios.put('http://localhost:5500/user/edit', data)
            .then((result) => {
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
                            <h2 >Edit {this.state.email}</h2><br />
                            <Forms
                                email={this.state.email}
                                password={this.state.password}
                                role={this.state.role}
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

export default Edituser