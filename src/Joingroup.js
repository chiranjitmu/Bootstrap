import React from 'react'
import './Joingroup.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { MdGroupAdd } from 'react-icons/md'
import { GoLocation, GoPencil } from 'react-icons/go'
import { CgDanger } from 'react-icons/cg'

function Joingroup() {
  return (
    <div className='join_group'>
    <div className='group_drop'>
    <DropdownButton variant='secondary' id="dropdown-basic-button" title="Write a Post">
      <Dropdown.Item href="#/action-1">Vijay kumar</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-2">Sarthak kamra</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">Sarah west</Dropdown.Item>
    </DropdownButton>
    <button className='button_group'><MdGroupAdd className='group_icon'/>Join Group</button>
    </div>


    <div className='location'>
       <GoLocation className='location_icon'/>
        {/* <input type="text" placeholder='Noida, India' className='location_name'/> */}
        <Form className="d-flex">
        <Form.Control
              type="search"
              placeholder="Noida, India"
              className="location_name"
              aria-label="Search"
            />
          </Form>
        <GoPencil className='location_pencil' />
    </div>


    <div className='location_note'>
        <CgDanger className='note_icon'/>
        <span> Your location will help us serve better</span>
        <span> and extent a personalised experience</span>
    </div>

    </div>
  )
}

export default Joingroup