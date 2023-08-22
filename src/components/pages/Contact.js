import React from 'react';


 




export default function Contact() {
  const submitEmail = ()=>{
    const emailHelp = document.getElementById('emailHelp')
    const userEmail = document.getElementById('exampleInputEmail1');
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if(userEmail === regex.test(userEmail)){
      emailHelp.innerHTML = "The Email is valid"
    }else{
      emailHelp.innerHTML = "The Email is not a valid email address"
    }
  
  }
  return (
    <div>
      <h1 className='offset-5'>Contact Page</h1>
      <form className='col-6 offset-3'>
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Please enter a valid Email address</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputName1" class="form-label">name</label>
    <input type="name" class="form-control" id="exampleInputName1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputMessage1" class="form-label">message</label>
    <input type="message" class="form-control" id="exampleInputMessage1"/>
  </div>
  <button onClick={submitEmail()}>Submit</button>
      </form>
    </div>
  );
}
