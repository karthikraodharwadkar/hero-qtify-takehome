import React from 'react'
import searchicon from '../../assest/search.svg'
import './search.css'

const search = () => {
  return (
    <div className='searchbar'>
        <input type='text' placeholder='Search a album of your choice' className='search-input'/>
        <button className='search-btn'><img src={searchicon} alt="search-icon"/></button>  
    </div>
  )
}

export default search