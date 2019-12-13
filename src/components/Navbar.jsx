import React from 'react';
import {Input, Menu, Segment} from 'semantic-ui-react'
import {Link, NavLink } from "react-router-dom/";


const Navbar = () => (

    <div>
        <Menu pointing>
            <Menu.Item
            ><Link to='/home'>Home</Link></Menu.Item>
            <Menu.Item><Link to='/about'>About</Link>
            </Menu.Item>
            <Menu.Item
            ><Link to='/card'>Card</Link></Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...'/>
                </Menu.Item>
            </Menu.Menu>
        </Menu>

    </div>
);

export default Navbar;