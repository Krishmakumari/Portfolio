<<<<<<< HEAD
import React from 'react'

const Button = ({name, isBeam=false,containerClass}) => {
  return (
    <button className={`btn ${containerClass}`}>
        { isBeam &&(
            <span className='relative flex h-3 w-3'>
            <span className='btn-ping'/>
            <span className='btn-ping_dot'/>
            </span>
        )}
        {name}
        </button>
  )
}

=======
import React from 'react'

const Button = ({name, isBeam=false,containerClass}) => {
  return (
    <button className={`btn ${containerClass}`}>
        { isBeam &&(
            <span className='relative flex h-3 w-3'>
            <span className='btn-ping'/>
            <span className='btn-ping_dot'/>
            </span>
        )}
        {name}
        </button>
  )
}

>>>>>>> 4b6c810f5a26ceb6dffa13bf8999e9d3226a77d2
export default Button