import React from 'react'
import axios from 'axios'
import {Container, Col, Row} from 'reactstrap';
import Navs from '../Part/nav'
import Forms from './LoginForm'
import ls from 'local-storage'


class Login extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            role: '',
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
        axios.post('http://localhost:5500/user/login/',data)
            .then((result) => {
                console.log("this is result"+JSON.stringify(result.data))                
                //userInfo.id_user = result.data.id_user   
                console.log("id_user is"+ JSON.stringify(result.data[0].data[0].id_user));
                //console.log("role is"+ result.data[0].role);
                ls.set('id_user', result.data[0].data[0].id_user);
                ls.set('role', result.data[0].data[0].role);
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

export default Login