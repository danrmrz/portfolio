import React from 'react'

const MyStackListItem = ({ title, icon }) => {
  return(
  <li className='mystack__list-item'>
    <img src={icon} alt="" className='mystack__list-item--image' />
    {title}
  </li>
  )
}

export default MyStackListItem