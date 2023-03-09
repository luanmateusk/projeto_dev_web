import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
function Login() {
    const nav = useNavigate();
    const { setLogado } = useUser()

    function entrarClick() {
        nav('/chat')
        setLogado(true)
    }

    return (
        <div>
            <span>
                login
            </span>
            <button className='bg-indigo-500 rounded-lg p-3' onClick={entrarClick}>
                Entrar
            </button>

        </div>
    );
}

export default Login;
