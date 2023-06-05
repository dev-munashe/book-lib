import React, { useState } from 'react'
import axios from 'axios';

const SignUpLogin = (props) => {
  const [formData, setForm] = useState({
    userName: '',
    email: '',
    password: '',
  });

  function handleChange(e) {
    setForm({ ...formData,[e.target.name]: e.target.value });
  }

  function handleSubmit(e){
    debugger;
          e.preventDefault();

          if (!formData.userName || !formData.email || !formData.password) {
            alert('Please fill in all the fields');
            return;
          }

          axios.post('https://localhost:7225/api/Registration', formData)
          .then(response => {
            //handle the success response
            console.log(response.data);
            debugger;
          })
          .catch(error  => {
            //handle any errors
            console.log(error);
          });
          setForm({
            userName: '',
            email: '',
            password: ''
          });
  };

  return (
    <div>
        <h1>Register</h1>
        <form action="Post" onSubmit={handleSubmit}>
        <div className='mb-3 mt-3'>
            <label type="text"  htmlFor=""><b>Username</b></label>
            <input name='userName' type='text' onChange={handleChange} value={formData.userName} />
        </div>

        <div className='mb-3'>
            <label type="email"  className='ms-3'><b>Email</b></label>
            <input type='email' name='email' onChange={handleChange} value={formData.email} />
        </div>

        <div className="mb-3">
            <label htmlFor="psw-repeat"><b>Password</b></label>
            <input type='password' 
            value={formData.password} 
            onChange={handleChange} 
            name='password' 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or 
            more characters" 
            required/>
        </div>

        <div>
        <button className='btn btn-primary registerbtn' type='submit'>{props.IsSignedUp ? 'Log in' : "Sign Up"}</button>
        </div>

        <div className="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>

    </form>
    </div>
  )
}

export default SignUpLogin