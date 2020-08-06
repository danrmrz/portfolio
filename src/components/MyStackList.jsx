import React from 'react'

import Rotated from './Rotated'

const MyStackList = ({ titleList ,children }) => {
  return(
    <>
      <Rotated>
          <h2 className='mystack__title title'>{ titleList }</h2>
      </Rotated>
      <div className='mystack__list-container'>
        <ul className='mystack__list'>
          { children }
        </ul>
      </div>
    </>
  )
}

export default MyStackList