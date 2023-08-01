// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell ,faMessage} from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import logo from '../../images/ratul bg.png';
import './Header.css'
const Header = () => {
    return (
        <div>
        <section className=''>
        <Navbar expand="lg shadow" className="">
      <Container className='container'>
        <Navbar.Brand href="#home" className='text-primary fw-bold fs-3'>Friend-Ship Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Form.Label htmlFor="inputPassword5" className='ms-5 px-5'></Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        className='px-5'
        placeholder='Search'
      />
<Nav.Link href="#Bell" className='fs-4 ms-5 px-3'><FontAwesomeIcon icon={faBell} /></Nav.Link>
<Nav.Link href="#Message" className='fs-4 ms-5 px-3'><FontAwesomeIcon icon={faMessage} /></Nav.Link>
            <NavDropdown className='ms-5 px-4 my-auto'  title="My Profile" id="basic-nav-dropdown">
              <div className='flex  align-items-center'>
              <img className='w-50' src={logo} alt="" />
              </div>
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </section>
        </div>
    );
};

export default Header;