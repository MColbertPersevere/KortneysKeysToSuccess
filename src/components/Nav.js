import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import navImg from '../../public/imgs/kortneylogosmall.png'

const PageNav = (props) => (
    <Navbar className="border-bottom-brown" bg="white" expand="lg">
        <NavLink to="/"><img className="img-fliud kortlogo" src={navImg} /></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="p-4">
            <Nav className="justify-content-end w-100">
            <NavLink className="nav-text" to="/">Home</NavLink>
            <NavLink className="nav-text" to="/about">About</NavLink>
            <NavLink className="nav-text" to="/services">Services</NavLink>
            <NavLink className="nav-text" to="/contact">Contact</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
export default PageNav;