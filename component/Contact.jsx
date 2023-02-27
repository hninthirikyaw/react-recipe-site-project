import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
      <h1 className='contact-header'>Contact Form</h1>
      <div className='form-container '>
      <form action="https://httpbin.org/get">
          <div className="d-flex mb-3">
          <label htmlFor="name" className=' form-label'>Name: </label>
          <input required placeholder='Enter your name' type="text" className='form-control' />
          </div>
          <div className='d-flex mb-3'>
          <label htmlFor="name" className='form-label'>Email:</label>
          <input required placeholder='abc@gmail.com' type="email" className='form-control' />
          </div>
          <label className='mb-2' htmlFor="suggestion">Enter your message:</label>
          <textarea placeholder='Write message here...' className='mb-3 form-control' name="suggestion"  cols="50" rows="6" required></textarea>
          <button className='btn btn-primary' type='submit'>Submit</button>
          <button className='btn btn-success ms-2' >Reset</button>
      </form>
    </div>
    <hr />
    <div className='address'>
     <div className='left'>
     <h2>Our Address:</h2>
      <p>N0.453, KanThar Street, MyoMa Quarter, Taunggyi.</p>
      <p>Phone: <a href="tel: +09897679889">+9897679889</a></p>
      <p>Email: <a href="email: foodie.recipe@gmail.com">foodie.recipe@gmail.com</a></p>
     </div>
      <div className='right mb-4'>
          <i className='bi bi-facebook social-icon'></i>
          <i className='bi bi-telegram social-icon'></i>
          <i className='bi bi-whatsapp social-icon'></i>
          <i className='bi bi-youtube social-icon'></i>
      </div>
    </div>
    <button className='btn btn-info'><a href="#">Back to Top</a></button>
    </div>
  )
}

export default Contact
