import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { LOGIN_ENDPOINT } from '../API/API';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const navigate = useNavigate();

    function toggleShowError(){
        setShowError(true)
    }

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, password };
        
        try {
            const response = await fetch(LOGIN_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                const data = await response.json();
                sessionStorage.setItem('token', data.token);
                navigate('/');  // Redirect to home page
            } else {
                toggleShowError();
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" action="" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={handleUsernameChange} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={handlePasswordChange} 
                />
                <button type="submit">Login</button>
                {showError && <p>Invalid username or password</p>}
            </form>
        </div>
    );
}

export default Login