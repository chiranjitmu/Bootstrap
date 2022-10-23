import React from 'react'
import Cards from './Cards'
import Joingroup from './Joingroup'

function Body() {
  return (
    <div style={{display: 'flex', gap:'2rem', marginTop: '1rem'}}>
        <Cards />
        <Joingroup/>
    </div>
  )
}

export default Body