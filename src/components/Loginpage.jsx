import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const dummyCredentials = {
    username: 'admin',
    password: '1234',
  };
  

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    if (username === dummyCredentials.username && password === dummyCredentials.password) {
      setLoginStatus(true);
      //return <Navigate to='/' dashboard />;
    } else {
      alert('Invalid credentials. Please try again.');
      //setLoginStatus('Invalid credentials. Please try again.');
      //return <><h3> Invalid credentials. Please try again. </h3></>
    }
  };


  if (loginStatus) {
    navigate('/dashboard');
  } else {
    //navigate('/');
  }

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      
      {loginStatus && <p>{loginStatus}</p>}

      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br /><br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br /><br />
        <button type="submit">Login</button>
      </form>

      
    </div>
  );
  
  
}

export default Loginpage