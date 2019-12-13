import React, {Component} from 'react';
import { connect } from 'react-redux'
import  * as studentAction from "../actions/students";
import { bindActionCreators } from "redux";
import StudentCard from './StudentCard'
import { Card, Grid, Menu, Segment} from 'semantic-ui-react'


class Student extends Component {
    state = { activeItem: 'bio' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })



    render() {

        const { activeItem } = this.state

        const { students, isReady} = this.props;

        setTimeout(() =>{
        console.log(this.props)
            }, 3000)


        return (
            <div>

                <Grid>
                    <Grid.Column width={4}>
                        <Menu fluid vertical tabular>
                            <Menu.Item
                                name='bio'
                                active={activeItem === 'bio'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='pics'
                                active={activeItem === 'pics'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='companies'
                                active={activeItem === 'companies'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='links'
                                active={activeItem === 'links'}
                                onClick={this.handleItemClick}
                            />
                        </Menu>

                    </Grid.Column>


                    <Grid.Column stretched width={12}>
                        <Segment>

                            <Card.Group itemsPerRow={4}>
                                {!isReady ?
                                    'Dowlaoding...' :
                                    students.map((book, i) => (
                                        <StudentCard key={i} {...book} >

                                        </StudentCard>
                                    ))}
                            </Card.Group>





                        </Segment>
                    </Grid.Column>
                </Grid>


            </div>

        );
    }
}


const mapStateToProps = ({ students }) => ({
    students: students.students,
    isReady: students.isReady
});



const mapDispatchToProps = dispatch =>({

       ...bindActionCreators(studentAction, dispatch)

});




export default connect(mapStateToProps, mapDispatchToProps)(Student);
