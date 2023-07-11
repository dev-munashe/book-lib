import React, { useState } from 'react'

const Login = () => {

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
try{


    const response = await fetch("api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userName, password}),
    });

    if(response.ok){
       // User successfully logged in
      const { token } = await response.json();

      // Store the JWT token in local storage or a secure cookie
      localStorage.setItem('token', token);

      //redirect the user to the main application page
    } else{
      const errorData = await response.json();
      console.log(errorData);
    }
  } catch (error){
    console.log(error);
  }
  }

  return <div className='App'>
    <div className='m-auto form-signin'>
    <h1 className='h1 mb-3 mt-5 fw-normal'>Login</h1>
    <form onSubmit={handleSubmit}>
      <div className='mb-3 mt-3 form-floating w-100'>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='form-control' />
        <label for="floatingPassword">Username</label>
      </div>
      <div className='mb-3 mt-3 form-floating w-100'>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' />
        <label for="floatingPassword">Password</label>
      </div>
      <button type='submit' className='btn btn-lg btn-warning' >Log In</button>
    </form>
    </div>
  </div>
}

export default Login