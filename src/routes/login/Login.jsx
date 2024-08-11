import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../api/Axios';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUserLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await instance.post('/auth/login', { username, password });
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem('token', response.data.access_token);
        navigate('/');
        Toastify({
          text: "Welcome to our website",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='login'>
      <div className="login__wrapper">
        <h3 className='title'>Login</h3>
        <form className='login__form' onSubmit={handleUserLogin}>
          <input 
            className='login__input' 
            type="text" 
            placeholder='Enter your username' 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
          <input 
            className='login__input' 
            type="password" 
            placeholder='Enter your password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          {error && <p className='login__error'>{error}</p>}
          <button 
            className='login__button' 
            type='submit' 
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;