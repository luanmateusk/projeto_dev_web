import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'

function Perfil() {

    const { id } = useParams()

    const nav = useNavigate()

    function voltar() {
        nav('/chat')
    }

    return (
        <div className='grid'>
            <span>
                Perfil {id}
            </span>
            <button className='bg-indigo-500 rounded-lg p-3' onClick={voltar}>
                Sair
            </button>
            <Link to='/chat'>
                Voltar
            </Link>
        </div>
    );
}

export default Perfil;
