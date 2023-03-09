import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Chat() {
    const nav = useNavigate();
    const [valor, setValor] = useState<number>(10)
    const { setLogado } = useUser()

    useEffect(() => {

    }, [])

    useEffect(() => {
        console.log('0')
    }, [])

    function perfil() {
        nav('/perfil/' + valor)
    }
    function sair() {
        nav('/')
        setLogado(false)
    }

    return (
        <div className='grid'>
            <span>
                Chat
            </span>
            <input placeholder='informe o id do perfil' type="number" value={valor} onChange={e => setValor(e.target.value as any)}>
            </input>
            <button className='bg-indigo-500 rounded-lg p-3' onClick={sair}>
                Sair
            </button>
            <button className='bg-indigo-500 rounded-lg p-3' onClick={perfil}>
                perfil
            </button>
        </div>
    );
}

export default Chat;
