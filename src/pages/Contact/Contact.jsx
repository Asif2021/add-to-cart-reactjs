import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <>
       <div>
       <div className='contact container-fluid d-flex justify-content-center align-items-center vh-100 '>
      <div className='contact-container d-flex justify-content-center align-items-center border rounded p-5'>

        <form className='text-start fw-bold'>

          <h2 className='text-center text-uppercase'>contact us</h2>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Your Name</label>
            <input type="text" name='name' className="form-control" id="exampleInputusername" aria-describedby="username" autoComplete='off' />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email Address</label>
            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Your Message!!!</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
                    <button type="submit" className="button">Submit</button>
         </form>
      </div>
    </div>
       </div>
        
        </>
  )
}

export default Contact