import React from 'react';
import { Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Container from './components/Container';
import TextoTeste from './components/TextoTeste';
import { UserProvider } from './context/UserContext';
import Chat from './pages/chat';
import Login from './pages/login';
import Perfil from './pages/perfil';
import Rotas from './routes';

function App() {

  function t(texto: string) {
    console.log(texto)
  }

  return (
    <BrowserRouter>
      <UserProvider>

        <Rotas />

      </UserProvider>
    </BrowserRouter>
  );
}

export default App;


//  {/* <Container>
//         <TextoTeste text="teste" />

//         <Login />
//         <Chat />
//         <Perfil />

//       </Container> */}