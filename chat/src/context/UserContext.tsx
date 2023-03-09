import React, { useState, useEffect } from 'react';


interface IUserContext {
    isLogado: boolean;
    setLogado(bool: boolean): void;
}

const UserContext = React.createContext<IUserContext>(
    {} as IUserContext,
);

export interface IProps {
    children?: React.ReactElement | React.ReactElement[];
}

export const UserProvider: React.FunctionComponent<IProps> = ({ children }) => {

    const [isLogado, setLogado] = useState<boolean>(false)

    return (
        <UserContext.Provider
            value={{
                isLogado, setLogado
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): IUserContext => {
    const context = React.useContext(UserContext);

    if (!context) {
        throw new Error('useToast deve ser usado em um UserProvider.');
    }

    return context;
};
