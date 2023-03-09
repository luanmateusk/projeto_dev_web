import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { useUser } from '../context/UserContext';
function Login() {
    const nav = useNavigate();
    const { setLogado } = useUser();
    const [novousuario, setNovousuario] = useState<boolean>(false)


    function entrarClick() {
        nav('/chat')
        setLogado(true)
    }

    return (
        <div className="grid lg:grid-cols-2 h-screen ">
            <div className=" bg-slate-400 flex items-center flex-col bg-[url('/src/assets/imagem.webp')] bg-cover bg-center">
                <h2 className="flex flex-col-reverse h-full mb-20 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                    🦑 Dizchat 🐈
                </h2>
            </div>
            <div
                className="flex items-center justify-center ">
                <form onSubmit={() => {
                    if (novousuario) {
                        alert(' novo usuario')
                    } else {
                        entrarClick()
                    }
                }} className="mt-8 grid grid-cols-1 gap-6">
                    <div className="col-span-6">
                        <Input
                            text='Usuário'
                            placeholder='Informe o usuário'
                        // error='Obrigatorio'
                        />
                    </div>
                    <div className="col-span-6">
                        <Input
                            type='password'
                            text='Senha'
                            placeholder='Informe a senha'
                        // error='Obrigatorio'
                        />
                    </div>
                    {
                        novousuario &&
                        <div className="col-span-6">
                            <Input
                                type='password'
                                text='Confirme a senha'
                                placeholder='Informe novamente a senha'
                            // error='Obrigatorio'
                            />
                        </div>
                    }

                    {/* <div className="col-span-6">
                                <label className="flex gap-4">
                                    <input type="checkbox" id="MarketingAccept" name="marketing_accept"
                                        className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm" />

                                    <span className="text-sm text-gray-700">
                                        I want to receive emails about events, product updates and
                                        company announcements.
                                    </span>
                                </label>
                            </div> */}

                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button
                            type='submit'
                            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                            {
                                novousuario ?
                                    'Criar'
                                    :
                                    'Entrar'
                            }
                        </button>

                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                            <div className="text-gray-700 underline cursor-pointer" onClick={() => setNovousuario(!novousuario)} >
                                {
                                    novousuario ?
                                        'Deseja Conectar um usuário?'
                                        :
                                        'Deseja criar um usuário?'
                                }

                            </div>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
