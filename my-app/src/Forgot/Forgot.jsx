import React from 'react'
import "./Forgot.css"

const Forgot = () => {
  return (
    <div>
      <div className="user-form">
       <input type='email' className='form-control input-line' placeholder='Email'/>
       <input type='number' className='form-control input-line mt-3' placeholder='Phn number'/>
       
       <button className='btn btn-secondary mt-3 ' type='submit'>Continue</button>
       </div>
    </div>
  )
}

export default Forgot
