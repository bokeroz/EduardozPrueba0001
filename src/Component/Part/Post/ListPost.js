import React from 'react';
import { Table, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
// import Pagination from "../components/Pagination";
import Modals from '../Modal';


class ListPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            id:''
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {

        this.setState({
            modal: !this.state.modal,
        });
    }

    
    render() {
        const url = 'http://localhost:3000/'

        console.log(JSON.stringify(this.props.list));

        const lists = this.props.list.map((e, i) => {
             return (
                 <tr key={i}>
                     <td>{i+1}</td>
                     <td>{e.title}</td>
                     <td>{e.comment}</td>
                     <td>{e.date}</td>
                     <td>
                        <Button color="success" size='sm' href={url + 'editpost/' + e.id_p} ><FontAwesome name='editpost' /></Button>{' '}
                        <Button color="danger" size='sm' key={e.id_p} onClick={() => this.setState({ id: e.id_p }, this.toggle)} ><FontAwesome name='trash' /></Button> 
                    </td>
                 </tr>
             )
         })



        return (
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
                            <th>title</th>
                            <th>comment</th>
                            <th>date</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { lists }
                    </tbody>
                </Table>
            </div>
        );
    }
}
        
export default ListPost
