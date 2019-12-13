import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Cardes from './components/Cardes'
import * as studentAction from "./actions/students";
import {connect} from "react-redux";
import axios from 'axios';
import { bindActionCreators } from "redux";





class App extends Component {


    componentDidMount() {
        const { setStudent } = this.props;
        axios.get('/students.json')
            .then(response => {
                localStorage.setItem('data', JSON.stringify(response.data));
                const data = localStorage.getItem('data');
                const test = JSON.parse(data)
                setStudent(test);

            })
            .catch(error => {
                console.log(error);
            });
    }




    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/card' component={ Cardes }/>

                </div>
            </BrowserRouter>

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


export default connect(mapStateToProps, mapDispatchToProps)(App);
