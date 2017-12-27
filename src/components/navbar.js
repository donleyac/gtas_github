import React from 'react';
import './navbar.css';
import {Navbar, Nav} from 'react-bootstrap';

const NavButton = (props) => {
  let target= props.target?props.target:"";
  return(<button type="button" className="btn btn-default navbtn">
    <a href={props.href} target={target}>
      <i className={props.icon}></i> &nbsp;{props.content}
    </a>
  </button>)
}

export const NavbarInst = (props) => (
  <Navbar staticTop inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand className="flex">
        <img alt="logo" className="navLogo" src={props.logo} />
        <span className="navTitle sm-hide">{props.title}</span>
        <span className="navTitle sm-show">{props.smTitle}</span>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavButton href="https://github.com/US-CBP/GTAS/"
          target="_blank" icon="fa fa-github"
          content="Github"/>
        <NavButton href="http://96.127.76.194:8080/gtas/login.html"
          target="_blank" icon="fa fa-desktop"
          content="Demo Site"/>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
