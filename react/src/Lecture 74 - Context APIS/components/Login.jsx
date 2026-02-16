import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ loggedIn, setLoggedIn }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn) {
            navigate("/dashboard");
        }
    }, [loggedIn, navigate]);

    return (
        <button onClick={() => setLoggedIn(prev => !prev)}>
            {loggedIn ? "Log Out" : "Login"}
        </button>
    );
}

export default Login;
