import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Login from './pages/login';
import Chat from './pages/chat';
import Perfil from './pages/perfil';
import NotFound from './pages/notFound';
import { useUser } from './context/UserContext';

function Rotas() {
    const { isLogado } = useUser();
    return (
        <Routes>
            {
                isLogado ?
                    <>
                        <Route path='/chat' element={<Chat />} />
                        <Route path='/perfil/:id' element={<Perfil />} />
                        <Route path='*' element={<NotFound />} />
                    </>
                    :
                    <>
                        <Route path='/' element={<Login />} />
                        <Route path='*' element={<NotFound />} />
                    </>
            }
        </Routes>
    );
}

export default Rotas;
