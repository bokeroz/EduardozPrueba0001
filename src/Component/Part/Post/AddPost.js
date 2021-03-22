import React from 'react'
import axios from 'axios'
import { 
    Container,
    Col, 
    Row,
} from 'reactstrap';
import Navs from '../nav'
import Forms from './FormPost'
// import Redirect from 'react-router-dom'
var d = new Date();
var n = d.toString();
var id_user = "1";

class Addpost extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            comment: '',
            id_user: id_user,
            date: n,
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.InputChangeHandler = this.InputChangeHandler.bind(this)
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
        const data = this.state
        delete data.redirect
        console.log(JSON.stringify(data));
        axios.post('http://localhost:5500/post/add',data)
            .then((result) => {
                console.log(result)
                this.setState({redirect: true})
                window.location.href = '/';
            })
    }

    render(){
        // if (this.state.redirect) {
        //     return (<Redirect to='/' />)
        // }
        return(
            <div>
                <Navs/>
            
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h2 >Add post</h2><br/>
                            <Forms
                                title={this.state.title}
                                comment={this.state.commet}
                                id_user={this.state.id_user}
                                date={this.state.date}
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

export default Addpost