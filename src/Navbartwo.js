import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Navbartwo.css'
import Signin from './Signin';
import Signup from './Signup';

function NavScrolltwo() {
  return (
    <div style={{ borderBottom: '1px solid gray'}}>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">All Post(32)</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{ border: 'none', fontSize: '15px'}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Article</Nav.Link>
            <Nav.Link href="#action2">Event</Nav.Link>
            <Nav.Link href="#action3">Education</Nav.Link>
            <Nav.Link href="#action4">Job</Nav.Link>
            <Nav.Link href="#action5" className='signup'><Signup /></Nav.Link>
            <Nav.Link href="#action6" className='signin'><Signin /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrolltwo;