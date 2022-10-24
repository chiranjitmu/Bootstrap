import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiSearch } from 'react-icons/fi'
import './Navbar.css'
import Signin from './Signin';
import Signup from './Signup';

function NavScroll() {
  return (
    <>
    <Navbar bg="light">
      <Container fluid>
        <img src='./Logo.jpg' alt='LOGO' className='logo_header'></img>
        <div className='creating'>
         <Signup />
         <Signin />
         </div>



        <Navbar.Collapse id="navbarScroll">





          <Form className="search_bar" style={{position: 'relative', left: '35%'}}>
             <FiSearch style={{position: 'relative', top: 9, fontSize: '22px', left: 30}}/>
            <Form.Control
              type="search"
              placeholder="Search for your Favorite"
              style={{borderRadius: 90, paddingRight: 100, paddingLeft: 100}}
              aria-label="Search"
            />
            </Form>


            

         <Nav
            className="nav_main"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
             <span style={{ right: 140, top:10, position: 'absolute'}}>Create account.</span>
            <span style={{ right: 170, top:30, position: 'absolute', color:'blue'}}>It's free</span>
            <NavDropdown style={{ position: 'absolute', right: 150, top:24,}} id="navbarScrollingDropdown">
              <NavDropdown.Item  style={{backgroundColor: 'white'}}><Signup /></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  style={{backgroundColor: 'white'}}><Signin /></NavDropdown.Item>             
            </NavDropdown>              
          </Nav>
                  
       
        </Navbar.Collapse>
      </Container>
    </Navbar>   


            </>

  );
}

export default NavScroll;