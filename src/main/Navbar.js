import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Route, Link, Switch, } from 'react-router-dom';
import Home from './Home';
import Location from '../components/Location';
import GitHubCommits from '../components/GitHubCommits';


const MyNavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='mainNavDiv'>
            <div>
                <Navbar className='myNavBar' color="light" light expand="md">
                    <NavbarBrand className='navbarbrand' href="/">Fantastic Four</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className='navlink'><Link to='/'>Home</Link></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink><Link to='/location'>Ticket Master</Link></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink><Link to='/githubcommits'>GitHub Api</Link></NavLink>
                                <NavLink className='navlink'><Link to='/githubcommits'>GitHub Api</Link></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            <div className='router'>
                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/location'><Location /></Route>
                    <Route exact path='/githubcommits'><GitHubCommits /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default MyNavBar;