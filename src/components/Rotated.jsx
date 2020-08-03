import React from 'react'

import '../../assets/styles/components/Rotated.styl'

const Rotated = ({ className, children }) => {
  return(
    <div className={ `rotated ${className}` }>
      <div className='rotated--color'></div>
      { children }
    </div>
  )
}

export default Rotated