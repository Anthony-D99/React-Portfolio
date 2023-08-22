import React, { useState } from 'react';


export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    } if (!name) {
      setErrorMessage(
        `Name field can not be empty`
      );
      return;
    }
    if (!message) {
      setErrorMessage(
        `Message field can not be empty`
      );
      return;
    }


    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage('')
  };

  return (

    <div>
      <h1 className='offset-5'>Contact Me</h1>

      <form className="form col-6 offset-3">
        <div className='mb-3'>
          <input
          className='form-control'
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
        </div>
        <div className='mb-3'>

          <input
          className='form-control'
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className='mb-3'>
          <input
          className='form-control'
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Message"
          />
        </div>
        {errorMessage && (
        <div>
          <p className="error-text offset-4">{errorMessage}</p>
        </div>
      )}
        <button type="button" className='btn btn-primary' onClick={handleFormSubmit}>Submit</button>
      </form> 

      
    </div>
  );
}