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
import GitHubCommits from '../components/GitHubCommits';

const MyNavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='mainNavDiv'>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Fantastic Four</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink><Link to='/'>Home</Link></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink><Link to='/'>NASA Api</Link></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink><Link to='/'>Open Weather</Link></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink><Link to='/'>Ticket Master</Link></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink><Link to='/githubcommits'>GitHub Api</Link></NavLink>
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
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/githubcommits'><GitHubCommits /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default MyNavBar;