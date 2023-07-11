import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpLogin = () => {

  const [formData, setForm] = useState({
    userName: '',
    email: '',
    password: '',
  });

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
    <div className='App'>
      <div className='m-auto form-signin'>
        <h1 className='h1 mb-3 mt-5 fw-normal'>Register</h1>
        <form onSubmit={handleSubmit}>
        <div className='mb-3 mt-3 form-floating w-100'>
            <input id="floatingInput" className='form-control' style={{backgroundColor:'#FFF8DE'}} name='userName' type='text' onChange={handleChange} value={formData.userName} />
            <label type="text"  htmlFor="floatingInput"><b>Username</b></label>
        </div>

        <div className='mb-3 form-floating w-100'>
            <input className='form-control' style={{backgroundColor:'#FFF8DE'}} type='email' name='email' onChange={handleChange} value={formData.email} />
            <label type="email"  className='ms-3'><b>Email</b></label>
        </div>
        <div className="mb-3 form-floating w-100">
            <input style={{backgroundColor:'#FFF8DE'}} type='password' 
            value={formData.password} 
            onChange={handleChange} 
            name='password' 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or 
            more characters" 
            className='form-control'
            id='floatingPassword'
            required/>
            <label htmlFor="floatingPassword"><b>Password</b></label>
        </div>

        <div>
        <button className='btn btn-lg btn-warning' type='submit'>Register</button>
        </div>

        {errorMessage && <div style={{color: 'red'}} className='error-message'>There is an error with signing you up. Please try again. <br/>{errorMessage}</div>}

        </form>
    </div>
    <div className="container signin">
    <p>Already have an account? <Link to="/Login">Sign in</Link>.</p>
  </div>
    </div>
    
  )
}

export default SignUpLogin