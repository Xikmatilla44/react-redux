import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";

import {Form, Container, Input, TextArea, Button, Header, Icon} from 'semantic-ui-react'


class AddOneStudent extends Component {


    state = {
        id: '',
        firstName: '',
        lastName: '',
        image: '',
        age: '',


    };


    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })

    };


     handelSummit = (e) => {
        e.preventDefault();

        console.log(this.state)
        const data = localStorage.getItem('data');
        let n = JSON.parse(data)
        console.log(n.length)
        this.setState({
            id: n.length +1
        })

        let test = new Array();
        debugger
        test.push(...JSON.parse(data), this.state);
        console.log(test)

    };


    render() {


        const {students} = this.props;


        setTimeout(() => {


        }, 5000)


        return (
            <Container>
                <br/>

                <Header as='h1' icon>
                    <Icon name='settings'/>
                    Add Student

                </Header>


                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Input}
                            label='First name'
                            placeholder='First name'
                            type='text' id='firstName'
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Input}
                            label='Last name'
                            placeholder='Last name'

                            type='text' id='lastName'
                            onChange={this.handleChange}

                        />

                        <Form.Field
                            control={Input}
                            label='Last name'
                            placeholder='Age'
                            type='text' id='age'
                            onChange={this.handleChange}
                        />

                    </Form.Group>
                    <Form.Field
                        control={TextArea}
                        label='Opinion'
                        placeholder='Image url'
                        type='text' id='image'
                        onChange={this.handleChange}

                    />
                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Save'
                        label='Save Student'
                        onClick={this.handelSummit}
                    />
                </Form>
            </Container>
        );
    }
}


const mapStateToProps = ({students, isReady}) => ({
    students,
    isReady
});


const mapDispatchToProps = dispatch => ({

    ...bindActionCreators(dispatch)


});


export default connect(mapStateToProps, mapDispatchToProps)(AddOneStudent);
