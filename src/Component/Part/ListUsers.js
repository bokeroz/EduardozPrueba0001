import React from 'react';
import {Container,Row,Col, Table, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
// import Pagination from "../components/Pagination";
import Modals from './Modal';
import axios from 'axios';
import Navs from '../Part/nav';



class ListUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            id:'',
            data: [],
        }        
        this.toggle = this.toggle.bind(this);
       
    }

    toggle(e) {
        this.setState({
            modal: !this.state.modal,
        });
    }

    componentDidMount(){
        axios.get('http://localhost:5500/user/')
        .then((result) => {            
            this.setState({
                data: result.data.data
            });
        })
    }
    
    render() {                      
        const lists = this.state.data.map((e, i) => {
             return (
                 <tr key={i}>
                     <td>{i+1}</td>
                     <td>{e.email}</td>
                     <td>{e.role== 1? "Admin": e.role== 2? "Edit": "Normal"}</td>                     
                     <td>
                        <Button color="success" size='sm' href={url + 'edit/' + e.id_user} ><FontAwesome name='edit' /></Button>{' '}
                        <Button color="danger" size='sm' key={e.id_user} onClick={() => this.setState({ id: e.id_user }, this.toggle)} ><FontAwesome name='trash' /></Button> 
                    </td>
                 </tr>
             )
         })
        return (
            <div>
                <Navs />
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>                            
                            <div>
                                <Modals
                                    modal={this.state.modal}
                                    toggle={this.toggle}
                                    id={this.state.id}
                                />
                                <Table hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Email</th>
                                            <th>Role</th>                                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {lists}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>            
        );
    }
}
        
export default ListUsers
