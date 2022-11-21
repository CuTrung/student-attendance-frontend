import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';


const Header = () => {
    const [user, setUser] = useState({});


    useEffect(() => {
        setUser(JSON.parse(window.sessionStorage.getItem("user")))
    }, []);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link className='navbar-brand' to='/'>Student attendance</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to="/">Home</NavLink>
                        <NavLink className='nav-link' to="/manage">Manage</NavLink>
                        <NavLink className='nav-link' to="/about">About</NavLink>
                        <NavLink className='nav-link' to="/admin">Admin</NavLink>
                        <NavLink className='nav-link' to="/attendance">Attendance</NavLink>
                    </Nav>

                    {user ?
                        <Nav>
                            <NavDropdown title={`Hi ${user.fullName}`} id="basic-nav-dropdown">
                                <Link className="dropdown-item" to="/profile">Profile</Link>
                                <Link className="dropdown-item" to="/">Logout</Link>
                            </NavDropdown>
                        </Nav>
                        :
                        <Nav>
                            <NavLink className='nav-link' to="/login">Login</NavLink>
                        </Nav>
                    }



                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;