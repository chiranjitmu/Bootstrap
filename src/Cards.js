import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsFillShareFill } from 'react-icons/bs'

function Cards() {
  return (
    <div className='cards'>
    <Card  style={{ width: '70vw', marginLeft: '3rem', marginBottom:'2rem' }}>
      <Card.Img variant="top" src="./Laptop.jpg" style={{ height: '25vw' }}/>
      <Card.Body>
        <Card.Title>✍️Article</Card.Title>
        <Card.Text style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', marginTop: '2rem'}}>
          What if famous brands had regular fonts? Meet RegularBrands!
        </Card.Text>
        <span style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem'}}>I've worked in UX for the better part of a decade. From now on, I  plan to rei...</span>
        <img src='./Forest.jpg' alt='' style={{ width: '4vw',height: '4vw', borderRadius: '99px'}}></img>
        <span style={{  marginLeft: '1rem', fontWeight: 'bold' }}>Vijay Kumar <span style={{ marginLeft: '5rem'}}>1.4k views</span></span>
        <Dropdown style={{ marginTop: '1rem'}}>
       <Dropdown.Toggle variant='secondary' id="dropdown-basic">
        <BsFillShareFill style={{ paddingRight: '5px'}}/>Share
       </Dropdown.Toggle>
       </Dropdown>
      </Card.Body>
    </Card>


    <Card style={{ width: '70vw', marginLeft: '3rem', marginBottom:'2rem' }}>
      <Card.Img variant="top" src="./Shed.jpg" style={{ height: '25vw' }}/>
      <Card.Body>
        <Card.Title className='test'>🔬Education</Card.Title>
        <Card.Text style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', marginTop: '2rem'}}>
          Tax Benefits for Investment under national pension scheme launched by Government
        </Card.Text>
        <span style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem'}}>I've worked in UX for the better part of a decade. From now on, I  plan to rei...</span>
        <img src='./Shed.jpg' alt='' style={{ width: '4vw',height: '4vw', borderRadius: '99px'}}></img>
        <span style={{  marginLeft: '1rem', fontWeight: 'bold' }}>Sarath kamra <span style={{ marginLeft: '5rem'}}>2.3k views</span></span>
        <Dropdown style={{ marginTop: '1rem'}}>
       <Dropdown.Toggle variant='secondary' id="dropdown-basic">
        <BsFillShareFill style={{ paddingRight: '5px'}}/>Share
       </Dropdown.Toggle>
       </Dropdown>
      </Card.Body>
    </Card>



    <Card style={{ width: '70vw', marginLeft: '3rem', marginBottom:'2rem' }}>
      <Card.Img variant="top" src="./Car.jpg" style={{ height: '25vw' }}/>
      <Card.Body>
        <Card.Title className='test'>📅Meetup</Card.Title>
        <Card.Text style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', marginTop: '2rem'}}>
          Finance & Investment Elite Social Mixer @Lujiazui
        </Card.Text>
        <span style={{ display: 'flex', flexDirection: 'column', marginBottom: '1rem'}}>I've worked in UX for the better part of a decade. From now on, I  plan to rei...</span>
        <img src='./Car.jpg' alt='' style={{ width: '4vw',height: '4vw', borderRadius: '99px'}}></img>
        <span style={{  marginLeft: '1rem', fontWeight: 'bold' }}>Sarah west <span style={{ marginLeft: '5rem'}}>3k views</span></span>
        <Dropdown style={{ marginTop: '1rem'}}>
       <Dropdown.Toggle variant='secondary' id="dropdown-basic">
        <BsFillShareFill style={{ paddingRight: '5px'}}/>Share
       </Dropdown.Toggle>
       </Dropdown>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;