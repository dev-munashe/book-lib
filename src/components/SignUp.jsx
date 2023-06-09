import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

const SignUpLogin = () => {

  const [formData, setForm] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const [isSuccessful, setIsSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

          fetch('https://localhost:7225/api/Registration/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
          .then(response => response.json())
          .then(data => {
            //handle the success response
            console.log(data);
            //redirect to home page
            setIsSuccessful(true)
          })
          .catch(error =>{
            //handle any errors
            if(error.response && error.response.data){
              setErrorMessage(error.response.data);
              console.log(error.response.data);
            }else{
              setErrorMessage(error.toString());
              console.log(error.toString());
            }
            console.log(error);
          });

          setForm({
            userName: '',
            email: '',
            password: ''
          });
  };

  return (
    <div className='App mt-5'>
        <h1>Register</h1>
        <form action="Post" onSubmit={handleSubmit}>
        <div className='mb-3 mt-3'>
            <label type="text"  htmlFor=""><b>Username</b></label>
            <input style={{backgroundColor:'#FFF8DE'}} name='userName' type='text' onChange={handleChange} value={formData.userName} />
        </div>

        <div className='mb-3'>
            <label type="email"  className='ms-3'><b>Email</b></label>
            <input style={{backgroundColor:'#FFF8DE'}} type='email' name='email' onChange={handleChange} value={formData.email} />
        </div>
        <div className="mb-3">
            <label htmlFor="psw-repeat"><b>Password</b></label>
            <input style={{backgroundColor:'#FFF8DE'}} type='password' 
            value={formData.password} 
            onChange={handleChange} 
            name='password' 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or 
            more characters" 
            required/>
        </div>

        <div>
        <button className='btn btn-primary registerbtn' type='submit'>Register</button>
        </div>

        {errorMessage && <div style={{color: 'red'}} className='error-message'>{errorMessage}</div>}

        <div className="container signin">
    <p>Already have an account? <Link to="/SignIn">Sign in</Link>.</p>
  </div>

    </form>
    {isSuccessful ? <SignIn /> : null}
    </div>
  )
}

export default SignUpLogin