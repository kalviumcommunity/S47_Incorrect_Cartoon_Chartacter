import './LoginForm.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://incorrect-cartoon-chartacter.onrender.com/login', { username, password });
      if (response.data && response.data.token) {
        document.cookie = `${username}=${response.data.token}; path=/`;
        console.log('Token from server:', response.data.token);
        navigate('/content')
      } else {
        console.log('No token returned from server');
        alert('Invalid User or Password')
      }
    } catch (error) {
      alert('Invalid User or Password')
    }
  };

  return (
    <div className='LoginFormDiv'>
      <p style={{ color: 'blue' }}>* for login username = test, password= password</p>
      <form onSubmit={handleSubmit} className='LoginForm'>
        <div>
          <label htmlFor="username">User Name :</label>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password" >Password :</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className='loginBtn' >Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
