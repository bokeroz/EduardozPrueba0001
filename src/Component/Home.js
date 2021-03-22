import React, { Component } from 'react';
import axios from 'axios';
import ListUsers from './Part/ListUsers';
import ListPost from './Part/Post/ListPost';
import Navs from './Part/nav';
import {Container,Row,Col} from 'reactstrap';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5500/post/')
            .then((result) => {
                delete this.state.data;
                this.setState({
                    data: result.data.data
                });
            })
    }

    render() {
        // console.log(this.state.data[0])

        return (
            <div>
                <Navs />

                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <ListPost list={this.state.data} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
