import { useState } from 'react'
import './Login.css'
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const user = {username, password}
        fetch('http://localhost:8080/user/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(user)
        })
    }

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
            </form>
        </div>
    );
}

export default Login